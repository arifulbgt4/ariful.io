---
title: "Microcontroller Guide 2026: MCU Families, Specs, and Selection"
description: "Compare major microcontroller families available in 2026, including cores, clock speeds, memory, connectivity, use cases, and practical selection trade-offs."
summary: "Choose a microcontroller by the complete product constraint set: real-time behavior, memory, analogue and connectivity needs, energy, security, tools, lifecycle, supply, and certification. Start with a representative workload and exact orderable part, then verify the software, production, and availability assumptions. Clock speed alone is not a dependable selection method."
takeaways:
  - "Match the MCU family to the workload, peripherals, power budget, and operating environment."
  - "Measure a representative complete firmware build instead of estimating Flash and RAM from a demo."
  - "Check lifecycle status, errata, package, tools, supply chain, and production programming early."
  - "Use a development board to learn quickly, then validate the exact production part separately."
audience: "Engineers, founders, and research teams choosing an MCU for a connected-product prototype or production design."
date: 2026-07-11
updated: 2026-07-27
category: Embedded Systems
tags:
  - Microcontrollers
  - Embedded Systems
  - IoT
  - ESP32
  - STM32
  - Raspberry Pi
  - Arm Cortex-M
  - RISC-V
image: /images/blog/microcontroller-landscape-2026.svg
imageAlt: "Diagram grouping 2026 microcontroller families by entry-level, wireless, real-time control, edge AI, and automotive use cases."
faqs:
  - question: "What is the best microcontroller for beginners in 2026?"
    answer: "For general learning, Raspberry Pi RP2040 or RP2350 boards provide approachable tooling and flexible PIO, while ESP32-C3, ESP32-C6, and ESP32-S3 boards add integrated wireless connectivity. STM32C0, STM32G0, and TI MSPM0 are useful when the goal is to learn workflows closer to commercial embedded development."
  - question: "Which microcontrollers include Wi-Fi and Bluetooth?"
    answer: "Espressif ESP32 families are the most common integrated Wi-Fi and Bluetooth options. ESP32-C6 additionally supports IEEE 802.15.4 for Thread and Zigbee. Nordic nRF54 and Silicon Labs EFR32 devices focus primarily on Bluetooth LE, Thread, Zigbee, and Matter rather than integrated Wi-Fi."
  - question: "Are 8-bit microcontrollers obsolete?"
    answer: "No. Modern PIC and AVR devices remain useful for low-cost control, 5-volt systems, deterministic timing, compact firmware, long product lifecycles, and applications that do not need the memory or performance of a 32-bit MCU."
  - question: "How much Flash and RAM does an MCU project need?"
    answer: "Small sensor and control applications may fit in tens of kilobytes, while wireless stacks, graphical interfaces, secure boot, file systems, and machine-learning inference can require hundreds of kilobytes or several megabytes. Measure the complete production build with all middleware and leave space for diagnostics and firmware updates."
  - question: "Can a microcontroller run artificial intelligence models?"
    answer: "Yes, but the practical model size and latency depend on memory, arithmetic acceleration, clock speed, and power limits. Small classifiers, anomaly detectors, wake-word models, and vision pipelines can run on selected MCUs, especially devices with DSP instructions, vector extensions, or a dedicated neural accelerator."
  - question: "What is the difference between an MCU, an MPU, and a development board?"
    answer: "An MCU normally combines a processor core, Flash, RAM, timers, and peripherals on one chip. An MPU usually relies on external memory and often runs a full operating system. A development board places an MCU or MPU on a usable PCB with power, programming, connectors, and supporting components."
  - question: "Should I choose Arm or RISC-V?"
    answer: "Choose according to the complete device, tools, peripherals, software support, lifecycle, and supplier rather than the instruction set alone. Arm Cortex-M has a mature commercial ecosystem, while RISC-V offers an open architecture and is increasingly available in mainstream wireless and high-performance MCUs."
  - question: "How should a company verify that an MCU is safe to design into a product?"
    answer: "Confirm the exact orderable part number, lifecycle status, errata, package, temperature grade, security features, regulatory requirements, authorised distribution, development tools, production programming process, and at least one practical second-source or redesign strategy."
---

Microcontrollers are the control layer inside sensors, appliances, robots, vehicles, medical instruments, industrial equipment, wearables, smart-home devices, and connected products. The market now spans tiny 8-bit controllers, low-power wireless systems-on-chip, real-time motor-control devices, gigahertz-class crossover MCUs, and processors with dedicated machine-learning acceleration.

There is no meaningful way to list every orderable MCU in one article. Major vendors collectively sell thousands of variants differentiated by package, Flash size, RAM, temperature rating, analogue capability, security, radio support, and qualification level. This guide therefore covers the **major actively marketed MCU families and representative specifications available as of 11 July 2026**.

Use it to build a shortlist—not as a replacement for the exact device datasheet, reference manual, errata, lifecycle notice, or distributor inventory check.

## Quick answer: which MCU family should you choose?

The best MCU is the least complicated device that satisfies the complete production requirement with enough margin.

- Choose **RP2040 or RP2350** for accessible development, flexible digital interfaces, deterministic PIO, and general prototyping.
- Choose **ESP32-C6 or ESP32-S3** when integrated Wi-Fi and Bluetooth are central requirements.
- Choose **Nordic nRF54L** or **Silicon Labs EFR32MG26** for low-power Bluetooth LE, Thread, Zigbee, or Matter products.
- Choose **STM32C0, STM32G0, TI MSPM0, Renesas RA0, or RA2** for cost-sensitive 32-bit control.
- Choose **STM32G4, TI C2000, Renesas RA motor-control families, or Microchip dsPIC** for power conversion, motor control, and timing-sensitive analogue systems.
- Choose **STM32U5, Renesas RA, PIC32CM, or PSoC 6** when low power and hardware-backed security are major design constraints.
- Evaluate **Renesas RA8, NXP MCX N, STM32N6, ESP32-P4, or i.MX RT** for high-performance interfaces, graphics, signal processing, or edge-AI workloads.
- Evaluate automotive-qualified families such as **Infineon AURIX, NXP S32K, Renesas RH850 or automotive RA devices, and automotive STM32 lines** when functional safety, qualification, and long lifecycle support are mandatory.

A familiar development board is not enough evidence for a production decision. The correct choice also depends on peripherals, voltage levels, sleep current, package availability, security architecture, firmware tooling, certification, and long-term supply.

## What specifications actually matter?

Clock speed and core type are useful, but they rarely decide an MCU selection alone.

### Processor architecture

Common architectures include:

- 8-bit PIC and AVR cores
- 16-bit and DSP-oriented controllers such as dsPIC
- Arm Cortex-M0+, M23, M3, M4, M7, M33, M55, and M85
- RISC-V cores ranging from compact control processors to high-performance application-specific implementations
- Proprietary or specialised real-time cores such as TI C28x
- Legacy but still commercially relevant MIPS-based MCU families

A Cortex-M0+ can be a better production choice than a faster M7 when the application needs low cost, low leakage, simple firmware, and a small package. A high-performance core becomes valuable when the workload includes graphics, complex communications, high-rate signal processing, large middleware stacks, or machine-learning inference.

### Flash and non-volatile memory

Flash stores firmware, constants, bootloaders, certificates, configuration, and sometimes a local file system.

Do not size Flash from the first prototype. A production build may add:

- secure boot
- cryptographic libraries
- communication stacks
- diagnostic logging
- localisation
- bootloader and rollback logic
- over-the-air update support
- factory-test firmware
- safety libraries
- future features

Dual-bank updates or A/B firmware images can require substantially more non-volatile memory than the application itself.

### SRAM

RAM is consumed by stacks, heaps, buffers, radio protocols, graphics framebuffers, neural-network tensors, file systems, and peripheral DMA.

Wireless and graphical applications often run out of RAM before they run out of processor performance. External PSRAM can help, but it introduces bandwidth, latency, power, package, and software considerations.

### Analogue peripherals

For sensor interfaces, power electronics, battery systems, and motor control, investigate:

- ADC resolution, sample rate, input impedance, and effective accuracy
- DAC availability
- internal operational amplifiers
- comparators
- programmable gain stages
- voltage references
- current-sense support
- simultaneous sampling
- timer-to-ADC triggering
- calibration behaviour across temperature

A headline such as "12-bit ADC" says very little about the complete measurement chain.

### Timers and real-time control

PWM resolution, complementary outputs, dead-time insertion, capture/compare channels, quadrature decoding, event routing, and deterministic interrupt latency can be more important than the CPU clock.

Motor drives, switch-mode power supplies, robotics, and precision pulse generation should be evaluated around the timer and analogue subsystem—not only the processor core.

### Connectivity

Possible interfaces include:

- UART, SPI, I²C, I3C, CAN, and CAN-FD
- USB device and host
- Ethernet MAC
- SDIO and memory interfaces
- MIPI camera and display interfaces
- Bluetooth LE
- Wi-Fi
- IEEE 802.15.4
- Thread, Zigbee, and Matter
- sub-GHz radios
- automotive and industrial field buses

Confirm whether a product has an integrated radio, requires an external transceiver, or is normally paired with a certified module.

### Power consumption

"Low power" must be evaluated in the context of the real duty cycle.

Compare:

- active current at the required clock
- radio transmit and receive current
- sleep and retention modes
- wake-up time
- RAM retention
- peripheral operation during sleep
- regulator efficiency
- sensor and external memory consumption

The MCU with the lowest deep-sleep figure may not deliver the longest battery life when the application wakes frequently or transmits large payloads.

### Security

For a connected commercial product, investigate:

- immutable boot ROM
- secure boot
- signed firmware
- encrypted storage
- hardware key isolation
- true random-number generation
- cryptographic accelerators
- Arm TrustZone or equivalent isolation
- debug-port protection
- lifecycle states
- secure firmware updates
- physical attack resistance
- device identity and certificate provisioning

Security is a system property. A secure MCU cannot compensate for exposed credentials, unsigned updates, unsafe cloud APIs, or an undocumented factory process.

## Major MCU families and representative specifications

The following table uses representative family-level specifications. Individual devices within each family can differ significantly.

| MCU family | Core and representative clock | Representative memory | Integrated connectivity | Best-known strengths |
|---|---|---|---|---|
| STM32C0 | Arm Cortex-M0+, up to 48 MHz | 16–256 KB Flash, up to 36 KB RAM | UART, SPI, I²C, timers, ADC; USB on selected parts | Entry-level 32-bit control and migration from 8-bit designs |
| STM32G0 | Arm Cortex-M0+, up to 64 MHz | 16–512 KB Flash, up to 144 KB RAM | Broad serial, USB, CAN-FD and analogue options by device | Cost-sensitive industrial and general-purpose control |
| STM32G4 | Arm Cortex-M4, up to 170 MHz | 32–512 KB Flash, up to 128 KB RAM | High-resolution timers, fast ADCs, comparators, op-amps, CAN-FD, USB | Motor control, digital power, instrumentation |
| STM32U5 | Arm Cortex-M33, up to 160 MHz | 128 KB–4 MB Flash, up to 3 MB RAM | USB, display, camera, memory, security and broad serial options | Ultra-low-power products, rich peripherals, security |
| PIC16 and PIC18 | Modern 8-bit PIC cores, commonly up to 32–64 MHz | Tens to more than 100 KB Flash, device-dependent RAM | ADC, PWM, configurable logic, serial interfaces; I3C on selected PIC18 devices | Low-cost control, 5 V designs, deterministic firmware |
| AVR Dx and AVR EB | 8-bit AVR, commonly 20–24 MHz | Up to 128 KB Flash in representative devices | ADC, DAC, timers, configurable custom logic, serial interfaces | Simple 5 V systems, appliances, control and education |
| SAM L and PIC32CM | Arm Cortex-M23, approximately 32–72 MHz by family | Roughly 64–512 KB Flash in representative devices | Low-power serial, touch, USB and security features by device | Low-power control and TrustZone-capable applications |
| PIC32MZ W1 | MIPS M-class, up to 200 MHz | Up to 2 MB Flash in the highlighted wireless family | Wi-Fi, Ethernet and broad embedded connectivity by device | Connected applications using the Microchip ecosystem |
| TI MSPM0G | Arm Cortex-M0+, up to 80 MHz | Up to 128 KB Flash and 32 KB SRAM in MSPM0G3507 | Fast ADCs, DAC, op-amps, CAN-FD and serial interfaces | Affordable precision analogue and industrial control |
| TI C2000 | TI C28x real-time control core, device-dependent clocks | On-chip Flash and SRAM vary by series | High-resolution PWM, ADC, comparators, CAN and industrial interfaces | Digital power, motor drives and deterministic control loops |
| Renesas RA0 and RA2 | Arm Cortex-M23, up to approximately 32–64 MHz | Up to 512 KB Flash in RA2 family devices | Serial, analogue, touch and low-power peripherals | Entry-level and battery-operated commercial products |
| Renesas RA4 and RA6 | Arm Cortex-M4 or Cortex-M33, up to approximately 100–240 MHz | Broad Flash and RAM options across the families | USB, CAN, Ethernet, security, touch and analogue options | Mainstream industrial, IoT and HMI systems |
| Renesas RA8 | Arm Cortex-M85, up to 1 GHz in current high-end devices | Large on-chip Flash and RAM configurations by device | Ethernet, graphics, external memory, security and rich interfaces | High-performance MCU systems and selected edge-AI workloads |
| NXP MCX N | Dual Arm Cortex-M33, up to approximately 150 MHz in flagship devices | Up to 2 MB Flash and 512 KB SRAM in representative devices | USB, Ethernet, serial, analogue and external-memory options | Integrated neural acceleration, security and industrial edge processing |
| NXP i.MX RT1170 | Cortex-M7 up to 1 GHz plus Cortex-M4 up to 400 MHz | Large on-chip SRAM; executes from external non-volatile memory | Ethernet, USB, display, camera, audio and external memory | Crossover-MCU performance, graphics and advanced HMI |
| Infineon PSoC 6 | Cortex-M4 up to 150 MHz plus Cortex-M0+ up to 100 MHz | Up to 2 MB Flash and large SRAM configurations by device | BLE on selected devices, USB, capacitive touch, programmable analogue and digital blocks | Flexible mixed-signal products, touch interfaces and secure IoT |
| ESP32-S3 | Dual Xtensa LX7, up to 240 MHz | 512 KB SRAM plus external Flash and optional PSRAM | 2.4 GHz Wi-Fi and Bluetooth LE | Connected products, USB, vector instructions and embedded vision prototypes |
| ESP32-C6 | Single 32-bit RISC-V core, up to 160 MHz | 512 KB SRAM, 320 KB ROM and low-power memory | Wi-Fi 6, Bluetooth LE 5 and IEEE 802.15.4 | Matter, Thread, Zigbee and modern low-cost wireless products |
| ESP32-P4 | Dual high-performance RISC-V cores plus a low-power core | 768 KB high-performance L2 memory, low-power SRAM and PSRAM package options | USB, Ethernet MAC, camera/display and high-speed interfaces; no integrated Wi-Fi | High-performance HMI, multimedia and edge processing with a companion radio |
| Nordic nRF54L15 | Arm Cortex-M33 at 128 MHz plus a RISC-V coprocessor | 1.5 MB non-volatile memory and 256 KB RAM | Bluetooth LE, Thread, Zigbee, Matter, NFC and proprietary 2.4 GHz | Low-power multiprotocol wireless products and modern security |
| Silicon Labs EFR32MG26 | Arm Cortex-M33 at 78 MHz | Up to 3.2 MB Flash and 512 KB RAM | Matter, OpenThread, Zigbee, Bluetooth LE and proprietary 2.4 GHz | Multiprotocol smart-home products, large protocol stacks and optional ML acceleration |
| Raspberry Pi RP2040 | Dual Cortex-M0+, nominally up to 133 MHz | 264 KB SRAM with external QSPI Flash | USB 1.1 and programmable I/O; no integrated radio | PIO, deterministic interfaces, accessible boards and tooling |
| Raspberry Pi RP2350 and RP2354 | Dual Cortex-M33 or dual Hazard3 RISC-V cores, up to 150 MHz | 520 KB SRAM; external Flash on RP2350 and 2 MB internal Flash on RP2354 variants | USB and expanded programmable I/O; no integrated radio | Flexible architecture, security improvements and advanced PIO |

These figures describe families, not guaranteed specifications for every package or ordering code. Always verify the exact part number before schematic capture.

## STMicroelectronics STM32

STM32 remains one of the broadest Arm Cortex-M ecosystems. Its portfolio ranges from entry-level controllers to high-performance, wireless, ultra-low-power, security-oriented, and edge-AI devices.

### STM32C0 and STM32G0

STM32C0 targets basic 32-bit control at low cost. It is appropriate for appliances, simple sensor nodes, power control, user interfaces, and migration from ageing 8-bit platforms.

STM32G0 provides more memory and peripheral flexibility while retaining a compact Cortex-M0+ architecture. Depending on the exact device, the family can provide USB, CAN-FD, accurate timers, analogue peripherals, and packages suitable for space-constrained boards.

### STM32G4

STM32G4 is designed around mixed-signal and real-time control. Its combination of a Cortex-M4 core, fast ADCs, high-resolution timers, comparators, operational amplifiers, and mathematical accelerators makes it a strong candidate for:

- brushless motor control
- inverters
- robotics actuators
- digital power supplies
- battery systems
- precision measurement

### STM32U0, U3, and U5

The STM32U families prioritise energy efficiency. STM32U5 adds substantial memory, security, graphics, and external-memory support for more complex battery-powered products.

A low-power family is not automatically the right answer for every battery device. Radio choice, sensor load, wake time, and firmware architecture must be measured together.

### STM32H5, H7, and N6

STM32H5 and H7 target higher-performance control, networking, graphics, and signal-processing workloads. STM32N6 extends the portfolio toward edge-AI and vision applications with a Cortex-M55-class processing architecture and dedicated neural acceleration.

These devices require more deliberate power, memory, PCB, boot, and software planning than an entry-level MCU.

[Review the official STM32 portfolio][st-stm32].

## Microchip PIC, AVR, SAM, PIC32, and dsPIC

Microchip supports several architectures rather than forcing every application into one MCU family.

### PIC16 and PIC18

Modern PIC devices remain relevant where the design needs:

- low cost
- compact packages
- 5 V operation
- deterministic control
- long lifecycle
- configurable logic
- useful analogue peripherals
- limited firmware complexity

Selected newer devices add features such as I3C, multi-voltage I/O, configurable logic, zero-cross detection, improved ADCs, and internal operational amplifiers.

### AVR

AVR remains widely used in education, appliances, simple automation, instrumentation, and legacy Arduino-compatible systems.

Modern AVR Dx and EB devices improve analogue capability, event routing, timers, configurable logic, and multi-voltage interfacing compared with older AVR generations.

### SAM and PIC32CM

SAM L and PIC32CM families provide Arm Cortex-M-class options for low-power and security-conscious applications. Cortex-M23 devices can support TrustZone-based separation while retaining moderate cost and power consumption.

### dsPIC

dsPIC digital signal controllers combine MCU control features with DSP-oriented instructions and motor-control peripherals. They remain important for:

- motor drives
- digital power
- power-factor correction
- inverters
- audio and signal processing
- timing-sensitive industrial control

### PIC32

PIC32 families serve applications that need more performance, memory, networking, graphics, or wireless connectivity than 8-bit and 16-bit products can provide.

[Review the official Microchip MCU portfolio][microchip-mcu].

## Renesas RA, RX, RL78, and RH850

Renesas has a broad commercial portfolio spanning low-power control, industrial systems, motor control, high-performance Arm MCUs, proprietary architectures, and automotive products.

### RA0 and RA2

RA0 and RA2 devices target entry-level and low-power designs. They are relevant for sensors, compact controllers, consumer products, and battery-operated systems.

### RA4 and RA6

RA4 and RA6 cover mainstream embedded products with broader memory, connectivity, security, touch, analogue, Ethernet, USB, and CAN options.

The exact device matrix is large, so selection should begin with the peripheral set and package rather than only the family name.

### RA8

RA8 introduces Cortex-M85 performance to the RA ecosystem. Current devices reach substantially higher performance than traditional Cortex-M4 and M33 controllers, and selected variants add neural-processing acceleration.

This makes RA8 relevant to industrial HMIs, graphics, networking, machine vision, advanced control, and edge-AI systems that still need MCU-style determinism and integration.

### RL78, RX, and RH850

RL78 remains useful for very low-power and cost-sensitive control. RX serves established industrial and real-time applications. RH850 focuses on automotive systems requiring qualification, functional-safety support, networking, and long product lifecycles.

[Review the official Renesas RA portfolio][renesas-ra].

## Texas Instruments MSPM0, C2000, SimpleLink, and Hercules

Texas Instruments separates general-purpose, wireless, real-time control, and safety-oriented requirements across several MCU portfolios.

### MSPM0

MSPM0 provides low-cost Arm Cortex-M0+ devices with strong analogue and timer options. The MSPM0G3507, for example, combines an 80 MHz core, 128 KB Flash, 32 KB SRAM, fast ADCs, a DAC, comparators, operational amplifiers, CAN-FD, AES support, and a true random-number generator.

This is useful for engineers who need inexpensive control without giving up practical analogue integration.

### C2000

C2000 is specialised for real-time control rather than general-purpose application processing. It is frequently considered for:

- motor drives
- solar inverters
- power conversion
- electric-vehicle power electronics
- industrial actuation
- digital control loops

The combination of C28x processing, control-law acceleration, PWM, fast ADC triggering, and deterministic peripherals can be more valuable than a general-purpose MCU with a higher headline clock.

### SimpleLink wireless MCUs

The SimpleLink portfolio covers Bluetooth LE, sub-GHz, Wi-Fi, Thread, Zigbee, and multiprotocol connectivity across different device families.

### Hercules and safety-oriented devices

Safety-oriented TI portfolios are used where lockstep execution, diagnostic coverage, functional-safety documentation, and qualified development processes are required.

[Review MSPM0G3507 specifications][ti-mspm0] and the [TI C2000 portfolio][ti-c2000].

## Espressif ESP32

Espressif has made integrated wireless MCUs accessible to a very large developer community. The ESP32 name now covers multiple architectures and radio combinations, so "ESP32" alone is not a sufficient part selection.

### ESP32-S3

ESP32-S3 combines dual Xtensa LX7 cores, Wi-Fi, Bluetooth LE, USB support, vector instructions, and external Flash or PSRAM options.

It is well suited to:

- connected displays
- voice interfaces
- cameras
- gateways
- local web interfaces
- consumer IoT
- robotics prototypes
- compact edge-processing devices

### ESP32-C3, C5, C6, and C61

The C-series moves Espressif toward RISC-V.

ESP32-C6 is particularly significant because it combines Wi-Fi 6, Bluetooth LE, and IEEE 802.15.4. This allows one chip family to participate in Matter, Thread, Zigbee, and conventional Wi-Fi product architectures.

Always verify which protocols are supported by the exact silicon revision, SDK version, radio certification, and module.

### ESP32-H2 and related 802.15.4 devices

ESP32-H2 focuses on Bluetooth LE and IEEE 802.15.4 without integrated Wi-Fi. It can be appropriate for Thread or Zigbee end devices and companion-radio designs.

### ESP32-P4

ESP32-P4 is a higher-performance, non-radio MCU designed for rich interfaces, displays, cameras, USB, Ethernet, and heavier local processing. A complete connected product may pair it with a separate Espressif radio device.

This separation can be useful when the application processor and radio have different lifecycle, certification, memory, or update requirements.

[Review the official Espressif SoC portfolio][espressif-socs].

## Nordic Semiconductor nRF52, nRF53, and nRF54

Nordic focuses strongly on low-power wireless design.

### nRF52

nRF52 remains a mature Bluetooth LE platform with a large ecosystem. It is still found in wearables, beacons, medical peripherals, keyboards, sensors, and battery-powered products.

A mature family may be preferable to a newer device when certification history, proven middleware, engineering familiarity, and availability outweigh performance gains.

### nRF53

nRF53 introduced dual-core architectures that can separate application processing from network and radio responsibilities.

### nRF54L

nRF54L modernises Nordic's mainstream low-power portfolio. The nRF54L15 combines a 128 MHz Cortex-M33 application processor, a RISC-V coprocessor, 1.5 MB non-volatile memory, 256 KB RAM, multiprotocol 2.4 GHz radio support, and a modern security subsystem.

It is relevant to:

- Bluetooth LE products
- Matter over Thread
- Zigbee
- human-interface devices
- medical peripherals
- asset tracking
- industrial sensors
- low-power consumer electronics

Do not compare low-power radios from data-sheet sleep current alone. Protocol behaviour, transmit power, connection interval, advertising strategy, memory use, antenna efficiency, and firmware quality all influence battery life.

[Review the official nRF54L15 specifications][nordic-nrf54l15].

## Silicon Labs EFR32

Silicon Labs EFR32 devices are widely evaluated for connected-home and multiprotocol products.

EFR32MG26 combines:

- a 78 MHz Cortex-M33
- up to 3.2 MB Flash
- up to 512 KB RAM
- Bluetooth LE
- Zigbee
- OpenThread
- Matter support
- security features
- optional machine-learning acceleration

The large memory is useful because simultaneous protocol support and Matter applications can consume substantial Flash and RAM.

EFR32 is particularly relevant when a product needs a vendor ecosystem focused on wireless stacks, smart-home interoperability, protocol certification, and multiprotocol operation.

[Review the official EFR32MG26 specifications][silabs-mg26].

## Raspberry Pi RP2040, RP2350, and RP2354

Raspberry Pi microcontrollers are distinct from Linux-capable Raspberry Pi application processors.

### RP2040

RP2040 combines two Cortex-M0+ cores, 264 KB SRAM, USB, and programmable I/O state machines. Program storage is normally provided through external QSPI Flash.

PIO is the defining feature. It allows developers to implement precise custom digital protocols without consuming the main CPU with every transition.

RP2040 does not contain integrated Wi-Fi or Bluetooth. Boards such as wireless Pico variants add a separate radio component.

### RP2350 and RP2354

RP2350 increases performance, RAM, security capability, and programmable I/O resources. It can operate using dual Cortex-M33 cores or dual Hazard3 RISC-V cores.

RP2354 variants add internal non-volatile memory, while RP2350 designs commonly use external Flash.

These devices are strong candidates for education, test equipment, custom interfaces, robotics, control systems, and prototypes where deterministic I/O matters more than integrated radio.

[Review the official Raspberry Pi microcontroller documentation][raspberry-pi-mcu].

## NXP MCX, i.MX RT, Kinetis, LPC, and S32K

NXP covers several distinct MCU requirements.

### MCX

MCX is NXP's newer general-purpose portfolio. Different series target entry-level control, analogue integration, wireless companion architectures, industrial connectivity, and edge processing.

MCX N devices add an integrated neural-processing unit in selected parts. This can accelerate compact machine-learning workloads without dedicating the main Cortex-M33 cores to every inference operation.

### i.MX RT

i.MX RT devices are often described as crossover MCUs because they provide processor-class clocks and interfaces while retaining MCU-style real-time execution.

The i.MX RT1170 combines a Cortex-M7 running at up to 1 GHz with a Cortex-M4 running at up to 400 MHz. It supports displays, cameras, Ethernet, USB, audio, and external memory.

These capabilities make it suitable for sophisticated HMI, audio, industrial, and graphics systems, but the design requires external-memory, signal-integrity, boot, power, and PCB expertise.

### Kinetis and LPC

Kinetis and LPC remain present in existing products and active portfolios. A new design should verify the recommended migration path, lifecycle, and whether MCX is a better strategic choice.

### S32K

S32K targets automotive body control, zonal systems, electrification support, networking, and functional-safety requirements. Automotive selection must include qualification, safety manuals, diagnostic libraries, security, CAN or Ethernet architecture, and supply commitments.

[Review the official NXP MCX N portfolio][nxp-mcx-n] and [i.MX RT1170 family][nxp-rt1170].

## Infineon PSoC, XMC, and AURIX

### PSoC

PSoC combines MCU processing with configurable analogue and digital resources. This can reduce external components when a product needs unusual signal routing, capacitive touch, analogue conditioning, or custom peripheral behaviour.

PSoC 6 devices combine Cortex-M4 and Cortex-M0+ cores, substantial memory, low-power modes, security, and Bluetooth options in selected devices.

### XMC

XMC families are used in industrial control, motor control, power conversion, and communication applications.

### AURIX

AURIX targets automotive and safety-critical systems. Its value is not merely processor speed; it includes multicore real-time architecture, safety mechanisms, automotive networking, security, qualification, and software support.

[Review the official Infineon PSoC 6 portfolio][infineon-psoc6].

## Other MCU vendors and families worth evaluating

The market is broader than the largest Western and Japanese portfolios.

| Vendor or family | Why it may enter a shortlist |
|---|---|
| GigaDevice GD32 | Broad Arm Cortex-M and RISC-V alternatives, often considered for cost-sensitive general-purpose designs |
| WCH CH32 | Low-cost Arm-compatible and RISC-V devices, USB-focused parts, and compact controllers |
| Nuvoton NuMicro | Consumer, industrial, audio, motor-control, security, and HMI-focused MCU families |
| Analog Devices MAX326xx and ADuCM | Low-power, security, precision analogue, instrumentation, and specialised sensing |
| Ambiq Apollo | Ultra-low-power wearable, voice, display, and edge-processing applications |
| Toshiba TXZ+ | Motor control, consumer, industrial, and automotive-oriented Cortex-M devices |
| Panasonic microcontrollers | Appliance, industrial, metering, automotive, and long-lifecycle control |
| Holtek | Low-cost consumer control, touch, display, appliance, and compact 8-bit or 32-bit applications |
| Nation N32 and other regional suppliers | Cost-sensitive Arm-based products where local supply, support, and qualification are acceptable |

These devices should not be selected only because their unit price is lower. Evaluate documentation quality, errata, compiler and debugger support, programming tools, security updates, distribution, export constraints, lifecycle policy, and access to competent field support.

## MCU selection by application

| Application | Strong families to investigate | Key requirements |
|---|---|---|
| Learning and general prototyping | RP2040, RP2350, ESP32-C3/C6/S3, STM32 Nucleo platforms | Tooling, documentation, board availability, debugging |
| Basic appliance or controller | PIC16/18, AVR Dx, STM32C0, STM32G0, RA0, MSPM0 | Cost, 5 V support, timers, ADC, package, lifecycle |
| Battery sensor | nRF54L, STM32U0/U5, SAM L, RA2, Ambiq Apollo | Sleep current, wake time, radio duty cycle, retention |
| Wi-Fi IoT | ESP32-C3/C5/C6/S3, TI Wi-Fi MCUs | Radio certification, TLS memory, OTA updates, provisioning |
| Matter or Thread device | ESP32-C6/H2, nRF54L, EFR32MG26 | IEEE 802.15.4, memory, ecosystem, certification |
| Motor control | STM32G4, TI C2000, dsPIC, Renesas motor-control RA/RX, Infineon XMC | PWM, ADC timing, comparators, control libraries |
| Digital power | C2000, STM32G4, dsPIC | High-resolution PWM, fast control loops, protection |
| USB device | RP2040/RP2350, STM32, SAM, PIC32, ESP32-S3 | USB class support, endpoint RAM, host/device requirement |
| Graphics or HMI | STM32H7, RA8, i.MX RT, ESP32-P4, high-memory PSoC | Display interface, framebuffer memory, external RAM |
| Edge AI | STM32N6, RA8P1-class devices, MCX N, ESP32-P4, high-end Cortex-M55/M85 MCUs | Tensor memory, NPU/DSP, model tooling, bandwidth |
| Automotive | AURIX, S32K, RH850, automotive STM32 and RA devices | AEC-Q qualification, safety, security, CAN/Ethernet |
| Secure connected product | STM32U5/H5, RA, nRF54, PIC32CM, PSoC 6 | Secure boot, key isolation, signed OTA, provisioning |

These are starting points, not universal winners.

## Development board versus production MCU

A development board is designed to make evaluation easy. A production design must answer additional questions.

For example:

- A Raspberry Pi Pico board uses an RP-series microcontroller but adds power regulation, Flash, USB, and connectors.
- An ESP32 development board may use a pre-certified module containing the MCU, Flash, antenna, and RF matching.
- An Arduino board name does not uniquely identify one MCU architecture. Different Arduino boards use AVR, Renesas, SAM, Nordic, RP2040, ESP32, and other processors.
- An STM32 Nucleo board exposes debugging and headers that would not normally appear on a production PCB.

Before moving from a board to a custom PCB, verify:

1. exact MCU or module part number
2. power rails and sequencing
3. boot configuration
4. programming and recovery interface
5. oscillator requirements
6. RF layout and certification
7. decoupling and analogue grounding
8. ESD and surge protection
9. thermal limits
10. test points and factory programming
11. firmware signing and key provisioning
12. connector and cable fault conditions

A [connected-product prototyping engagement](/services/connected-product-prototyping) should identify these risks before the design is treated as manufacturing-ready.

## Arm versus RISC-V

Arm Cortex-M currently provides one of the most mature MCU ecosystems. Engineers benefit from established compilers, debuggers, RTOS ports, middleware, safety packages, security standards, and a very large supplier base.

RISC-V defines an open instruction-set architecture. Vendors can build different cores and add extensions without licensing the Arm instruction set.

RISC-V is now present in mainstream devices from Espressif, Raspberry Pi, WCH, GigaDevice, and other suppliers. Some products use RISC-V as the main application processor; others use it as a low-power, radio, or peripheral coprocessor.

The instruction set does not determine the quality of the final MCU. Compare:

- interrupt architecture
- debug implementation
- toolchain stability
- peripheral quality
- vendor SDK
- documentation
- security
- errata
- ecosystem
- lifecycle
- actual benchmark performance

A well-supported Arm MCU can be safer than a poorly documented RISC-V device, and a well-supported RISC-V MCU can be a better fit than an unnecessarily expensive Arm part.

## Are 8-bit MCUs still relevant?

Yes.

An 8-bit MCU can remain the correct engineering choice when the application:

- reads a few sensors
- controls relays, LEDs, or a small motor
- needs 5 V I/O
- has strict cost targets
- requires a tiny package
- uses simple deterministic firmware
- must remain supported for many years
- does not need complex networking or security middleware

Moving every simple product to a high-performance 32-bit device can increase firmware complexity, boot time, attack surface, and validation effort without creating user value.

However, a connected product with TLS, secure updates, a radio stack, complex data processing, or a graphical interface will normally benefit from a modern 32-bit architecture and substantially more memory.

## Can MCUs run AI?

MCUs can execute compact machine-learning models, but "AI MCU" is a broad marketing label.

Practical MCU workloads include:

- anomaly detection from vibration or current
- keyword spotting
- gesture recognition
- simple image classification
- occupancy detection
- sensor fusion
- predictive-maintenance features
- small regression and classification models

Performance depends on:

- model architecture
- quantisation
- tensor memory
- input dimensions
- DSP or vector instructions
- NPU availability
- memory bandwidth
- operator support
- model-conversion tools
- acceptable latency
- power budget

A dedicated accelerator can improve efficiency, but it may support only a limited operator set. Validate the actual model through the vendor toolchain before selecting the MCU.

Do not assume that a model which fits in Flash will fit in RAM during inference.

## Toolchain and software ecosystem

Hardware specifications are only part of the total engineering cost.

Evaluate:

- IDE and command-line support
- GCC, LLVM, vendor compiler, and commercial compiler compatibility
- SWD, JTAG, trace, and profiling support
- debugger availability
- RTOS support
- device drivers
- middleware quality
- USB and networking stacks
- radio stack licensing
- security libraries
- board-support packages
- continuous-integration compatibility
- unit and hardware-in-the-loop testing
- long-term SDK maintenance
- migration between family members

A cheaper MCU can become more expensive if firmware engineers lose weeks to unstable drivers, incomplete documentation, or unavailable debugging tools.

## Supply-chain and lifecycle checks

Do not use a marketplace listing as proof that a device is suitable for a commercial product.

Before approval, record:

- manufacturer lifecycle status
- exact orderable code
- package and reel quantity
- temperature grade
- authorised distributors
- standard lead time
- minimum order requirements
- current errata
- longevity programme
- last-time-buy policy
- pin-compatible alternatives
- firmware portability
- module alternatives
- counterfeit risk
- country-of-origin or export constraints where relevant

Stock and price can change daily. A robust design process maintains an approved-parts list and documents the cost of redesign.

## Practical MCU selection workflow

### 1. Define hard requirements

Document requirements that cannot be negotiated:

- supply voltage
- number and type of GPIO
- analogue inputs and accuracy
- PWM and timer channels
- communication interfaces
- radio protocols
- memory
- package
- operating temperature
- security
- safety or regulatory qualification
- peak and average power
- production lifetime

### 2. Estimate complete firmware resources

Include bootloader, RTOS, protocol stacks, cryptography, diagnostics, updates, and future margin.

Do not select a device that only fits the current prototype.

### 3. Shortlist multiple suppliers

Whenever practical, compare at least two technically viable ecosystems. They do not need to be pin-compatible to provide strategic value; even a documented redesign path reduces risk.

### 4. Prototype the highest-risk subsystem

Test the feature most likely to fail:

- radio range
- sleep current
- motor-control timing
- ADC noise
- display bandwidth
- camera interface
- USB throughput
- secure update
- ML inference latency

### 5. Review the exact datasheet and errata

Family-level marketing pages are not enough. Check the package-specific pinout, alternate functions, memory map, DMA restrictions, silicon revision, and known issues.

### 6. Build a production acceptance test

The production test should verify hardware identity, Flash, RAM, clocks, analogue paths, communications, security state, calibration, and firmware version.

### 7. Document why the MCU was selected

Record rejected alternatives, assumptions, risks, and migration options. This prevents the same decision from being repeated without context.

## Frequently asked questions

## What is the best microcontroller for beginners in 2026?

For general learning, Raspberry Pi RP2040 or RP2350 boards provide approachable tooling and flexible PIO, while ESP32-C3, ESP32-C6, and ESP32-S3 boards add integrated wireless connectivity. STM32C0, STM32G0, and TI MSPM0 are useful when the goal is to learn workflows closer to commercial embedded development.

## Which microcontrollers include Wi-Fi and Bluetooth?

Espressif ESP32 families are the most common integrated Wi-Fi and Bluetooth options. ESP32-C6 additionally supports IEEE 802.15.4 for Thread and Zigbee. Nordic nRF54 and Silicon Labs EFR32 devices focus primarily on Bluetooth LE, Thread, Zigbee, and Matter rather than integrated Wi-Fi.

## Are 8-bit microcontrollers obsolete?

No. Modern PIC and AVR devices remain useful for low-cost control, 5-volt systems, deterministic timing, compact firmware, long product lifecycles, and applications that do not need the memory or performance of a 32-bit MCU.

## How much Flash and RAM does an MCU project need?

Small sensor and control applications may fit in tens of kilobytes, while wireless stacks, graphical interfaces, secure boot, file systems, and machine-learning inference can require hundreds of kilobytes or several megabytes. Measure the complete production build with all middleware and leave space for diagnostics and firmware updates.

## Can a microcontroller run artificial intelligence models?

Yes, but the practical model size and latency depend on memory, arithmetic acceleration, clock speed, and power limits. Small classifiers, anomaly detectors, wake-word models, and vision pipelines can run on selected MCUs, especially devices with DSP instructions, vector extensions, or a dedicated neural accelerator.

## What is the difference between an MCU, an MPU, and a development board?

An MCU normally combines a processor core, Flash, RAM, timers, and peripherals on one chip. An MPU usually relies on external memory and often runs a full operating system. A development board places an MCU or MPU on a usable PCB with power, programming, connectors, and supporting components.

## Should I choose Arm or RISC-V?

Choose according to the complete device, tools, peripherals, software support, lifecycle, and supplier rather than the instruction set alone. Arm Cortex-M has a mature commercial ecosystem, while RISC-V offers an open architecture and is increasingly available in mainstream wireless and high-performance MCUs.

## How should a company verify that an MCU is safe to design into a product?

Confirm the exact orderable part number, lifecycle status, errata, package, temperature grade, security features, regulatory requirements, authorised distribution, development tools, production programming process, and at least one practical second-source or redesign strategy.

## Final recommendation

Do not ask, "Which MCU has the highest clock speed?"

Ask:

> Which device satisfies the product's real-time, memory, analogue, connectivity, energy, security, tooling, lifecycle, and supply requirements with the lowest total engineering risk?

For a proof of concept, development speed and board availability may dominate. For a production device, lifecycle, testability, security, certification, and supply-chain resilience become equally important.

Review [selected engineering work](/work), read the [project-fit and engagement guide](/hire), or [discuss an embedded or connected-product prototype](/hire#project-brief).

## Primary technical sources

- [STMicroelectronics STM32 portfolio][st-stm32]
- [Microchip microcontroller portfolio][microchip-mcu]
- [Renesas RA microcontroller portfolio][renesas-ra]
- [Texas Instruments MSPM0G3507][ti-mspm0]
- [Texas Instruments C2000 real-time MCUs][ti-c2000]
- [Espressif systems-on-chip portfolio][espressif-socs]
- [Nordic Semiconductor nRF54L15][nordic-nrf54l15]
- [Silicon Labs EFR32MG26][silabs-mg26]
- [Raspberry Pi microcontroller documentation][raspberry-pi-mcu]
- [NXP MCX N series][nxp-mcx-n]
- [NXP i.MX RT1170][nxp-rt1170]
- [Infineon PSoC 6][infineon-psoc6]

[st-stm32]: https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html
[microchip-mcu]: https://www.microchip.com/en-us/products/microcontrollers
[renesas-ra]: https://www.renesas.com/en/products/microcontrollers-microprocessors/ra-cortex-m-mcus
[ti-mspm0]: https://www.ti.com/product/MSPM0G3507
[ti-c2000]: https://www.ti.com/microcontrollers-mcus-processors/c2000-real-time-control-mcus/overview.html
[espressif-socs]: https://www.espressif.com/en/products/socs
[nordic-nrf54l15]: https://www.nordicsemi.com/Products/nRF54L15
[silabs-mg26]: https://www.silabs.com/wireless/zigbee/efr32mg26-series-2-socs
[raspberry-pi-mcu]: https://www.raspberrypi.com/documentation/microcontrollers/microcontroller-chips.html
[nxp-mcx-n]: https://www.nxp.com/products/processors-and-microcontrollers/arm-microcontrollers/general-purpose-mcus/mcx-mcus/mcx-n-series-microcontrollers:MCX-N-SERIES
[nxp-rt1170]: https://www.nxp.com/products/processors-and-microcontrollers/arm-microcontrollers/i-mx-rt-crossover-mcus/i-mx-rt1170-crossover-mcu-family-high-performance-mcu-with-arm-cortex-m7-and-cortex-m4-cores:i.MX-RT1170
[infineon-psoc6]: https://www.infineon.com/cms/en/product/microcontroller/32-bit-psoc-arm-cortex-microcontroller/psoc-6/
