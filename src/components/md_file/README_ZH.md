<div align="center">
<img src="assets/logo-7608cfed.png" alt="icon"/>

# SmartVision Library

[English](README.md) / 简体中文
</div>

## 简介

为了使问学用户能够快速、方便的使用平台提供的各类能力，我们提供了一套功能完备的Python library

## 调用方式
只需要三行代码即可体验令人震撼的模型能力
```python
from smartvision.pipline.pipline_process import pipeline
func = pipeline(task="task-name", model="model-name", device="gpu")
print(func("input"))
```
## 我们支持哪些任务？
### split-video
**介绍**

入参为视频或音频，输出为台词内容以及起止时间段的json schema

**参数列表**

 | pipline args | required | type | remarks               |
 |--------------|----------|------|-----------------------|
 | task         | true     | str  | 任务名称                  |
 | model        | false    | str  | 模型本地地址或仓库地址（用户名/仓库名称） |
 | device       | false    | str  | cpu / gpu             |

**调用示例**

```python
from smartvision.pipline.pipline_process import pipeline
video_path = ['/data/video/demo.mp4']
func = pipeline(task="split-video")
print(func(video_path))
```

### text-to-image
**介绍**

文生图，根据正向提示词、反向提示词、迭代步数等参数通过扩散模型生成图像

**参数列表**

 | pipline args | required | type | remarks               |
 |--------------|----------|------|-----------------------|
 | task         | true     | str  | 任务名称                  |
 | model        | false    | str  | 模型本地地址或仓库地址（用户名/仓库名称） |
 | device       | false    | str  | cpu / gpu             |

 | function args       | required | type | remarks            |
 |---------------------|----------|------|--------------------|
 | seed                | false    | int  | 随机种子，-1表示每次都会产生随机值 |
 | prompt              | true     | str  | 正向提示词              |
 | negative_prompt     | false    | str  | 反向提示词              |
 | num_inference_steps | false    | int  | 迭代步数               |
 | guidance_scale      | false    | int  | 提示词与图像相关性数值        |
 | width               | false    | int  | 图像宽度               |
 | height              | false    | int  | 图像高度               |


**调用示例**

```python
from smartvision.pipline.pipline_process import pipeline
prompt = "......"
func = pipeline(task="text-to-image")
print(func(prompt))
```

### image-to-text
**介绍**

图生文, 传入图片获取图片描述

**参数列表**

 | pipline args | required | type | remarks               |
 |--------------|----------|------|-----------------------|
 | task         | true     | str  | 任务名称                  |
 | model        | false    | str  | 模型本地地址或仓库地址（用户名/仓库名称） |
 | device       | false    | str  | cpu / gpu             |

**调用示例**

```python
from smartvision.pipline.pipline_process import pipeline
image_path = ['/data/image/demo.png']
func = pipeline(task="image-to-text")
print(func(image_path))
```

### ocr-recognition
**介绍**

图片识别

**参数列表**

 | pipline args | required | type | remarks               |
 |--------------|----------|------|-----------------------|
 | task         | true     | str  | 任务名称                  |
 | model        | false    | str  | 模型本地地址或仓库地址（用户名/仓库名称） |
 | device       | false    | str  | cpu / gpu             |

**调用示例**

```python
from smartvision.pipline.pipline_process import pipeline
image_path = ['/data/image/demo.png']
func = pipeline(task="ocr-recognition")
print(func(image_path))
```


## 构建sdk
```bash
  # 修改版本号 
  smartvision/_init_.py文件里面 
  # 开发环境打包
  windows环境下执行build.bat
  # 阿里云环境打包
  阿里云环境下执行build-prod.bat
```

## 如何安装
```bash
  # development environment
  pip install smartvision -i http://10.0.44.35:8080/simple/ --trusted-host 10.0.44.35
  # ali cloud environment
  pip install smartvision -i https://pypi.dcclouds.com/simple/
```

在进行音视频任务时请确保您的环境中已安装ffmpeg
官网地址：https://ffmpeg.org/download.html