---
layout: post
title: "ASP.NET Core with Worker Service"
date: 2020-10-28
keywords: ",asp.net,dotnet,worker"
---

## How To: Add Worker Service to ASP.NET Core

Create New Project

```
$ dotnet new webapi -o helloworld
$ cd helloworld
```

Create Worker File 

{root-project}/Worker.cs

```csharp
using System;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace helloworld
{
    public class Worker: BackgroundService
    {
      private readonly ILogger<Worker> _logger;

      public Worker(ILogger<Worker> logger)
      {
        _logger = logger;
      }

      protected override async Task ExecuteAsync(CancellationToken stoppingToken)
      {
        while (!stoppingToken.IsCancellationRequested)
        {
          _logger.LogInformation($"Worker run at:{DateTime.Now.ToUniversalTime()}");
          await Task.Delay(2000, stoppingToken);
        }
      }
    }
}
```

Add Service to Program.cs

{root-project}/Program.cs

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.DependencyInjection; //// <--- Add this library

namespace helloworld
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                  webBuilder.UseStartup<Startup>();
                })
                ///// Add This part /////
                .ConfigureServices(services =>
                {
                  services.AddHostedService<Worker>();
                });
                /////////////////////////
    }
}

```

Run and check the result

```
info: helloworld.Worker[0]
      Worker run at:10/28/2020 10:48:22 AM
info: helloworld.Worker[0]
      Worker run at:10/28/2020 10:48:24 AM
info: helloworld.Worker[0]
      Worker run at:10/28/2020 10:48:26 AM
```

:)
