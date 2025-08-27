---
title: "ESP32 Sensor Devices in Home Assistant"
date: 2025-08-26 14:00:00 -0600
categories: [Projects]
tags: [esp32, esphome, home assistant, grafana, automation]
---


Lately, I’ve been experimenting with ESP32 boards and ESPHome to bring smarter environmental control into an insulated storage area in our garage. This post walks through how I set up temperature and humidity sensors, automated a dehumidifier, and visualized everything with Grafana, all using Home Assistant.
## Hardware & Setup
I’m using an ESP32 microcontroller paired with a DHT22 sensor to monitor temperature and humidity. The ESP32 runs ESPHome, which makes it easy to define sensor behavior in YAML and integrate directly with Home Assistant over Wi-Fi.
Here’s the basic ESPHome config for the sensor:
```YAML
sensor:
  - platform: dht
    pin: GPIO4
    temperature:
      name: "Living Room Temperature"
    humidity:
      name: "Living Room Humidity"
    model: DHT22
    update_interval: 30s
```

Once flashed and connected, the ESP32 reports sensor data to Home Assistant automatically.

## Automation: Humidity-Triggered Dehumidifier
To act on the data, I set up an automation that turns on a smart plug when humidity rises above 60%. The plug powers a "dumb" dehumidifier, and turns off when humidity drops below the threshold.
Here’s the Home Assistant automation:
```YAML
alias: "Dehumidifier Control"
trigger:
  - platform: numeric_state
    entity_id: sensor.living_room_humidity
    above: 60
action:
  - service: switch.turn_on
    target:
      entity_id: switch.dehumidifier_plug
mode: single
```

I use a second automation to turn it off when humidity falls below.

## Visualization with Grafana
To monitor trends over time, I send sensor data to InfluxDB and visualize it in Grafana. This lets me track humidity levels, temperature changes, and dehumidifier activity on a single dashboard.
Grafana helps me:
- Spot seasonal humidity patterns
- Adjust automation thresholds
- Validate that the system is working as expected

## Why This Setup?
This project gives me:
- Environmental awareness: I know when the air gets muggy before it damages our stuff.
- Energy efficiency: The dehumidifier runs only when needed.
- Data-driven control: I can tweak behavior based on actual trends.

It’s a simple setup, but it’s reliable, extensible, and satisfying to build.
