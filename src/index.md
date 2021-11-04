---
title: "Home"
layout: "layouts/home.html"
permalink: /
tools:
  - headline: "Utilizing the Linux security subsystem"
    body: "u-bmc uses the Linux kernel just as OpenBMC does but also enables more hardened configurations and makes extensive use of the existing security subsystems like Yama, Lockdown and soon Landlock and SELinux."
    icon: "linux"
  - headline: "Golang all the way"
    body: "By having all of the userspace in Go we can guarantee memory safety and high performance. And because your client software is also written in Go, it will run on every OS that a static Go binary can run on e.g. Linux, FreeBSD, macOS and Windows."
    icon: "go"
  - headline: "gRPC for communication"
    body: "Instead of using IPMI we rely on gRPC for the tooling. The same control software that runs on the BMC can run on your client and communicates via gRPC. This makes controlling your BMC incredibly flexible!"
    icon: "grpc"
  - headline: "OpenMetrics to monitor your fleet"
    body: "The OpenMetrics format is widely adopted and neatly integrates with Prometheus, making it DevOps friendly and easy to get a visual representation about your fleet as a whole without having to check each BMC manually."
    icon: "openmetrics"
  - headline: "TASK for images"
    body: "Task is a task runner / build tool that aims to be simpler and easier to use than, for example, GNU Make or OpenBMCs Yocto. Not only is it easy to use, it’s also pretty fast, speeding up development with incremental builds and an overall lean build pipeline that only takes a few minutes depending on the compiling hardware. (For reference, it takes roughly 5 minutes on a recent ThinkPad T14)"
    icon: "tasks"
---
