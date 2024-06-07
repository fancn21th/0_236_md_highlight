**frontend**

*useCompletion => callCompletionApi（request） => readDataStream => parseStreamPart*

**backend**

*toAIStreamResponse => StreamingTextResponse（response） => toAIStream => formatStreamPart* 

![image-20240528171147913](/Users/marvin010528/常用材料/aireact.assets/image-20240528171147913.png)

![image-20240528173426455](/Users/marvin010528/常用材料/aireact.assets/image-20240528173426455.png)

```js
export interface StreamPart<CODE extends string, NAME extends string, TYPE> {
  code: CODE;
  name: NAME;
  parse: (value: JSONValue) => { type: NAME; value: TYPE };
}
```

![image-20240528171500400](/Users/marvin010528/常用材料/aireact.assets/image-20240528171500400.png)

![image-20240528172639605](/Users/marvin010528/常用材料/aireact.assets/image-20240528172639605.png)

![image-20240528173334359](/Users/marvin010528/常用材料/aireact.assets/image-20240528173334359.png)

