using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.WebSockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace Forms
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseWebSockets();
            app.UseStaticFiles();
            app.UseRouting();

            app.Use(async (ctx, next) => {
                if (ctx.Request.Path == "/ws")
                {
                    if (ctx.WebSockets.IsWebSocketRequest)
                    {
                        using (WebSocket socket = await ctx.WebSockets.AcceptWebSocketAsync())
                        {
                            var buffer = new byte[1024 * 4];
                            WebSocketReceiveResult result = await socket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);
                            Console.WriteLine(Encoding.UTF8.GetString(buffer));

                            do
                            {
                                await Task.Delay(1000);
                                var nu = DateTime.Now.ToLongTimeString();
                                buffer = Encoding.UTF8.GetBytes(nu);
                                await socket.SendAsync(new ArraySegment<byte>(buffer, 0, buffer.Length),WebSocketMessageType.Text, true, CancellationToken.None);
                                //result = await socket.ReceiveAsync(new ArraySegment<byte>(buffer), CancellationToken.None);
                            }
                            while (!result.CloseStatus.HasValue);
                        }
                    }
                }
            });
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapGet("/", async context =>
                {
                    await context.Response.WriteAsync("Hello World!");
                });
            });
        }
    }
}
