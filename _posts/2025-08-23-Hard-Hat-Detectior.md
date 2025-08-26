---
title: "AI Hard Hat Detector"
date: 2025-08-23 12:00:00 -0600
author: Sean Closson
categories: [ai]
tags: [iot, ai, projects]
excerpt: "Practical edge AI on cheap IoT hardware"
layout: post
---
# Overiew
In 2024, I built a POC IoT device that would detect if a person was wearing a hard hat or not. It would then send a message via MQTT to another device that would display "GO" if they were wearing a hard hat or "STOP" if they were not.  I loved this little project as it touched on AI/ML, IoT, and I learned some new technologies like MQTT. I've wanted to write up a post on this project, but I decided to redo the project itself and write that up here.  This post will be updated as I go and potentially be split into multiple posts.  If so, I will link them.

# The Plan
## Project Brief
Use an inexpensive IoT camera to detect if a person is wearing a hard hat or not.

## Criteria
* Create synthetic data to train ML model
  * Use Unreal Engine to create virtual people (MetaHumans) with and without hard hats
  * Program camera movements to take pictures for training data
* IoT device must only message result, cannot offload detection
  * Use MQTT to send pass/fail/noop messages
  * Model must run on ESP32 device
* Must use GCP for model training
  * A potential employer focuses on GCP for their clients, so I want to demonstrate my knowledge of that ecosystem

## Phases
1. Build synthetic dataset
   1. Prep Unreal Engine 5 environment
      1. Enable MetaHuman Creator plugin
      2. Create MetaHumans
         1. Use at least three for diversity
      3. Add cine camera and crane
         1. program sequence for crane movement over 150 frames
   2. Capture images
      1. Captured 150 frames (images) over three passes (low, medium, high crane height) per MetaHuman (3) with hard hat and again without (2)
      2. Resulting in 2,700 images
      3. Rename files for easy classification
2. Train model using GCP
   1. Create dataset "IsWearingHardHat"
      1. Created two lables, "hardhat" and "nohat"
   2. Upload to GCP
      1. Uploaded in batches of 500
      2. Labled for classification (versus object detection) as "nohat" and "hardhat"
   3. Using VertexAI and AutoML, set a 10 hour training budget for training an edge AI model (5.6MB higher accuracy)
      1. model failed to train the first two attempts, but for the 3rd time I set it to the 3.2MB size
      2. Download the tflite model file
3. Deploy the model to ESP32 IoT device
   1. 
         

