---
title: Form 表单
nav:
  order: 2
  title: 组件
group:
  title: 功能组件
  order: 2
---

# Form 表单

## 何时使用

表单的核心功能是采集数据信息，是采集、传递、提交数据的中间媒介。其作为获取用户输入的重要交互方式，也承担着将问题和答案进行配对的角色。

## 代码演示

### 基础样式

表单通常由标签、输入域、填写提示、操作按钮等几部分组成。根据输入流程，可将用户的输入过程分为输入前、输入中、输入后。

1. 标签：告诉用户该表单需要填写什么类型的信息，通常放置在表单文本框之外居左或上方的位置。极少数情况下也会放置于文本输入框内，激活输入框，则消失。
2. 输入域：用来收集用户操作的信息，每个输入域字段包含一类型信息。
3. 填写提示：帮助用户有效正确填写信息的引导内容或反馈内容。
4. 操作按钮是指填写完表单各项内容后，所要进行的操作动作（eg：保存、取消、提交、确定等）来结束当前操作流程或在流程之中或之后开启新的功能操作。

<code src='./demo/base.tsx' title='基础用法' />

### 页面形式

表单页面的展示形式有三种页面跳转、弹窗输入、就地编辑。影响页面形式的因素包括表单输入容量及操作流程主次关系（即亲密度）。

##### 页面跳转

一个功能的主要操作流程在一个页面中展示，保证主要功能的操作的流畅度。同时，若输入内容较多，建议采用页面跳转。页面跳转的信息承载能力强，对反馈的及时性要求不高；体量感比较重，给人感觉稳定性更高一些，特别重要的功能表单填写确认建议用页面跳转。
页面跳转包含两种：

- 新页面打开

  为主要流程步骤中的分支流程，不会影响用户对主流程的继续操作，页面功能具有一定的独立性。

- 当前页面跳转

  则为流程步骤中的关键步骤，提示用户已进入下一步骤。页面间的跳转体现了产品的基本使用流程，关键流程关键路径建议在当前页面打开，
  让产品流程更加清晰，更少的打开页减少多余信息对用户注意力的分散，让用户聚焦在当前页面的信息中。

##### 输入弹窗

弹窗样式的输入表单是当前页面的分支操作，体现了页面间的层级关系。输入弹窗样式的表单，输入内容的多少处于页面跳转和就地编辑两种样式之间。内容稍多，交互页面流程不适合就地编辑，同样也尚未达到新页面的程度，建议选择输入弹窗。

用户在不离开当前页的情况下继续插入性操作，为流程步骤中的分支行为，可由用户选择是否进行，不覆盖用户已阅读内容。输入弹窗轻量化，信息承载较页面跳转弱、较就地编辑强，输入内容数量有较大的弹性空间。

该类型的表单会打断当前的主操作流程需要及时响应，带给人的感受更局促一些，因此输入内容不宜过多，且不能过多地带离用户的注意力，否则会给用户的主操作流程造成较强的割裂，降低输入的流畅度。

<code src='./demo/modal.tsx' title='与 Modal 弹窗一起使用' />

##### 就地编辑

就地编辑是轻量型信息采集表单，适用于输入内容较少，适用频率较低，同时属于主功能分支的场景。其优点在于操作便捷，随时启用与退出，能够保证用户对主要功能的操作流畅度。

就地编辑一般为嵌入在列表内、卡片中，信息展示区域通过双击或点击特定的操作按钮即变为激活编辑状态。其存在的意义在于完善或者增强主功能的操作，而不是打断。

### 标签样式

根据标签与输入域的位置关系，其对齐方式可分为：右对齐、左对齐、顶对齐三种。每一种对齐方式都有一定的优点与局现性，因此在合适的场景下选择合适的标签样式，可以提升用户的输入效率。

##### 右对齐

当既要减少垂直空间，又要加快填写速度的场景，使用右对齐。采用右对齐方式标签的表单浏览时间，比顶部对齐标签的表单的时间长，但比左对齐方式所需的浏览时间短。页面高度有限的话，推荐这种对齐方式。

- 优点：节约垂直空间。
- 缺点：降低可读性，标签长度和输入框弹性小。

##### 顶对齐

希望用户快速填写表单，完成任务的场景使用顶部对齐。顶对齐方式对眼球移动的需求比其他对齐方式要更少。移动端表单页面多使用此种形式，手机为下拉式交互，垂直高度不受限制。

- 优点：有最快的浏览和处理速度；标签长度弹性大。
- 缺点：非常占垂直空间。

##### 左对齐

希望用户放慢速度，仔细思考表单中的每个输入框的场景使用左对齐类型。采用左对齐标签方式的表单是三者之中所需浏览时间最长的，但这种对齐方式能够在你想要用户放慢速度阅读，仔细考虑的时候使用（如一些重要的输入）。

- 优点：文字开头按阅读视线对齐，方便阅读，节约垂直空间。
- 缺点：填写速度慢，标签长度和输入框弹性小。

<code src='./demo/layout.tsx' title='布局方式' desc="`labelAlign` 应与 `labelWidth` 配合使用" />

##### 必填项

必填项一般要有明确标识，除非全部是必填项，且必填项数量在 7 个以内。选填项比较少时，互联网产品一般必填项不做标识，非必填项后面则标注选填字样。

<code src='./demo/required-all.tsx' title='必填样式' />
<code src='./demo/required.tsx' title='只显示必填样式' />
<code src='./demo/required-optional.tsx' title='只显示非必填样式' />

### 输入域样式

输入域是表单的主题与核心。

##### 组件样式

表单常见的组价样式包括文本框、文本域、选择器、开关、Checkbox、Radio、步骤条、上传、标签页等。对于组建的选用，在下文中将会做详细探讨。

<code src='./demo/inputs.tsx' title='与输入组件一起使用' />

##### 单例与多列布局

在 web 页面中，由于页面的关系，导致跳转页面与弹窗的横向空间较大，纵向空间不足，若出现较多的输入内容时，且不能采用分模块、分步骤、高级等交互布局时，有的设计师会采用双列或多列表单，以提高横向空间的利用，这也是可以接受的。此时，要注意列与列间距的合理性以及遵守用户的视觉流，可以参照菲兹定律。

但是作为表单，单列表单的浏览及填写效率是最高的。用户的视觉流较为顺畅，可以提升填写效率，同时能够减少用户的疲劳度。因此，建议表单多采用单列布局。

<code src='./demo/multi-column.tsx' title='多列布局' />

##### 分模块

对于内容过多的表单输入组件，分类、分模块的排版方式让用户感觉更好，不是密密麻麻一大片，有条理。用户可以在填写好一段内容后进行心理上停顿休息，减少视觉疲劳和心理压力。

<code src='./demo/tab.tsx' title='与 Tab 一起使用' />

##### 分步骤

对于内容过多的表单输入组件，又有着明确的操作先后关系，可以选用分步骤，每屏仅展示该步骤下的表单输入组件，同时校验反馈也可分步进行。

##### 高级（非重要必填项默认收起，点击展开）

对于表单内容很多，且存在一些没那么重要的非必填项，可以选择默认隐藏，用户有欲望填写时点击展开可进行输入填写。或者搜索条件太多，默认收起，展示更多的信息内容；需要搜索时，点击展开。

<code src='./demo/expand.tsx' title='展示更多' />

### 提示样式

提示样式分为引导提示与反馈提示两种。

##### 引导提示

引导提示是对用户输入信息规则的注释与说明，在用户输入前，输入框内提示、输入框外提示、激活输入框提示可归为引导提示。

- 全局性提示：在告知用户填写表单会带来怎样的益处，有利于用户完善相关表单内容（益处提示）。告知用户信息采集的用途以及使用保证（安全提示），解除用户输入顾虑。

<code src='./demo/alert.tsx' title='全局提示信息' />

- 定位提示：适用于表单内容比较多，字段内容较少时，应在相应反馈问题的位置进行提示，帮助用户快速定位到。

<code src='./demo/drawer.tsx' title='与 Drawer 一起使用' />

##### 反馈提示

反馈提示是页面系统对用户的输入给与校验，并对校验结果予以展示的提示形式。反馈提示是根据用户输入而显示的提示，出现在输入中与输入后

<code src='./demo/message.tsx' title='提示信息' />

- 即时校验反馈：根据输入字符数量而显示密码强度，从而时刻提示用户当前密码强度是否符合要求。该方式的校验条件多在本地，不需要实时向服务器发命令
  以得到反馈。

  <code src='./demo/validating.tsx' title='提示信息' />

- 局部校验反馈：在注册账号时，输入完整用户名以后，提示用户名是否可用，则为局部校验反馈。校验内容存储在远端，程序需要完整的输入信息到远端进行
  检验，并给出反馈。

  <code src='./demo/async.tsx' title='异步校验' />

- 全局校验反馈：多指在输入完成或者阶段性完成时，界面给出的输入反馈，用户需要操作触发。在用户操作反馈动作按钮后，界面在相应位置（一般为单个输
  入框的下方或右侧）一次性给出不合乎要求的反馈提示。

  <code src='./demo/unknown.tsx' title='全局校验反馈' />

### 控件选用

设计表单时，要尽可能的减少用户的思考、操作、理解负担，减少用户对表单的厌烦情绪，同时提高表单的输入效率，这是表单输入最核心的原则。

1. 选择框优于输入框

   - 任何高密度的操作，都会引起用户的不适。因此，在输入项的选择时，用选择来代替键盘输入。
   - 一方面，简化用户的操作，点击次数远小于输入，减少用户的操作密度；
   - 另一方面，减轻用户的认知、记忆负担。相较于输入框，选择操作步骤少，相对来说效率较高，同时，用户用思考输入值，也不用承担输入错误要重新输入的
     风险。用户可以通过选择项，清晰明确的知道有哪些值可以选择，对于一些无关紧要，或者用户较难理解的输入项，可以预制默认值，可以照顾到各阶段的用户。

2. 单选框与下拉选择框

   - 作为同一类型的输入项，单选框与下拉选择框的优点类似，使用的场景有较大的差异。
   - 单选框较为适合选项较少（少于五个），同时选择项之间较为类似，需要强调或对比时，可以优先考虑单选框。另外，当选项能见度和快速响应优先时，也建议优先考
     虑单选框。因为相较于下拉选择，用户可以通过展示出来的选项，直接选中目标选项，提升输入效率。
   - 下拉选择框较为适合选项较多（超过五个），有默认选项，或者选择项之间有较大差异，同时下拉选择最好不要引起随后输入项数量以及页面的变化，否则下拉选择的
     收起以及页面的变化，易引起用户不适。
   - 若选项过多，超过二十个，最好引入模糊匹配以及一定排序规则（首字母排序、数字排序等），方面用户提前预知选项的大致位置，或通过模糊检索找到相应的选项。

3. 层级联动

   - 维度和维度值进行联动，用户选择所在区域后，区级单位会进行自动识别填写，当然支持用户再次进行编辑。

<code src='./demo/size.tsx' title='表单尺寸' />

## API

本组件依赖了[`rc-filed-form`](https://github.com/react-component/field-form)，更多配置参数与可能的变动以[原始文档](https://github.com/react-component/field-form)为准

### Form

| 参数             | 说明                                                                                                     | 类型                                                                                                | 默认值     |
| ---------------- | -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ---------- |
| component        | 设置 Form 渲染元素，为 false 则不创建 DOM 节点                                                           | ComponentType \| false                                                                              | form       |
| name             | 表单名称                                                                                                 | string                                                                                              | -          |
| layout           | 表单布局                                                                                                 | `horizontal` \| `vertical` \| `inline`                                                              | horizontal |
| colon            | 配置 Form.Item 的 colon 的默认值。表示是否显示 label 后面的冒号 (只有在属性 layout 为 horizontal 时有效) | boolean                                                                                             | false      |
| labelAlign       | label 标签的文本对齐方式                                                                                 | `left` \| `right`                                                                                   | -          |
| size             | 设置字段组件的尺寸（仅限 giod 组件）                                                                     | `small` \| `middle` \| `large`                                                                      | -          |
| labelWidth       | label 标签的宽度（width）                                                                                | number \| string                                                                                    | -          |
| inputWidth       | input 控制项标签的宽度（width）                                                                          | number \| string                                                                                    | -          |
| initialValues    | 表单默认值，只有初始化以及重置时生效                                                                     | object                                                                                              | -          |
| requiredMark     | 必选样式，可以切换为必选或者可选展示样式。此为 Form 配置，Form.Item 无法单独配置                         | boolean \| `optional`                                                                               | true       |
| validateMessages | 验证提示模板，说明见下                                                                                   | [ValidateMessages](https://github.com/react-component/field-form/blob/master/src/utils/messages.ts) | -          |
| validateTrigger  | 统一设置字段校验规则                                                                                     | string \| string[]                                                                                  | onChange   |
| onFinish         | 提交表单且数据验证成功后回调事件                                                                         | `function(values)`                                                                                  | -          |
| onFinishFailed   | 提交表单且数据验证失败后回调事件                                                                         | `function({ values, errorFields, outOfDate })`                                                      | -          |
| onFieldsChange   | 字段更新时触发回调事件                                                                                   | `function(changedFields, allFields)`                                                                | -          |
| onValuesChange   | 字段值更新时触发回调事件                                                                                 | `function(changedValues, allValues)`                                                                | -          |

### Form.Item

| 参数              | 说明                                                                                                                | 类型                                              | 默认值   |
| ----------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | -------- |
| label             | label 标签的文本                                                                                                    | string \| ReactNode                               | -        |
| title             | label 标签的 title 属性                                                                                             | string                                            | -        |
| name              | 字段名，支持数组                                                                                                    | [NamePath](#namepath)                             | -        |
| valuePropName     | 子节点的值的属性，如 Switch 的是 'checked'。该属性为 getValueProps 的封装，自定义 `getValueProps` 后会失效          | string                                            | -        |
| getValueFromEvent | 设置如何将 event 的值转换成字段值                                                                                   | `(..args: any[]) => any`                          | -        |
| validateTrigger   | 设置字段校验的时机                                                                                                  | string                                            | string[] | `onChange` |
| trigger           | 设置收集字段值变更的时机                                                                                            | string                                            | string   | `onChange` |
| required          | 必填样式设置。如不设置，则会根据校验规则自动生成                                                                    | boolean                                           | false    |
| htmlFor           | 设置子元素 label htmlFor 属性                                                                                       | string                                            | -        |
| labelAlign        | 设置 label 标签的文本对齐方式                                                                                       | `left` \| `right`                                 | -        |
| initialValue      | 设置子元素默认值，如果与 Form 的 initialValues 冲突则以 Form 为准                                                   | string                                            | -        |
| labelWidth        | 设置子元素 label 标签的宽度                                                                                         | string \| number                                  | -        |
| rules             | 校验规则，设置字段的校验逻辑。点击[此处](https://ant.design/components/form-cn/#components-form-demo-basic)查看示例 | [Rule[]](#rule)                                   | -        |
| help              | 帮助信息                                                                                                            | string \| ReactNode                               | -        |
| feedback          | 自定义校验结果提示信息，如不设置则会根据校验规则自动生成                                                            | string \| ReactNode                               | -        |
| feedbackType      | 自定义校验结果类型                                                                                                  | `validating` \| `error` \| `warning` \| `success` | -        |

### NamePath

`string | number | (string | number)[]`

### Rule

Rule 支持接收 object 进行配置，也支持 function 来动态获取 form 的数据：

```ts
type Rule = RuleConfig | ((form: FormInstance) => RuleConfig);
```
