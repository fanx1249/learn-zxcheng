---
title: COMPASS Skills：给 AI 长任务加一个本地总控
description: 了解 dongshuyan/compass-skills 的四个核心 skill，以及它适合解决什么问题、怎么安全安装和日常使用。
sidebar_position: 2
---

# COMPASS Skills：给 AI 长任务加一个本地总控

项目地址：[dongshuyan/compass-skills](https://github.com/dongshuyan/compass-skills)

COMPASS Skills 是一套面向 AI Agent 的本地 skills 系统。它不是某个单独工具，而是把需求澄清、任务进度、用户协作偏好和新会话续接拆成四个 skill，让长任务不完全依赖聊天记录。

![COMPASS Skills 生态图](/img/tutorials/compass-skills/compass-system-map.zh.svg)

## 它解决什么问题

我对这个项目的理解是：它想解决 AI 协作里的“长期记忆”和“任务不跑偏”问题。

普通对话适合处理短任务，但一旦任务变长，就容易出现几个问题：

1. 需求还没说清楚，AI 已经开始做。
2. 多轮对话后，任务进度、决策和待办散在聊天记录里。
3. 上下文太长后，想换新会话继续，但新会话不知道之前做到哪里。
4. AI 不知道用户长期偏好，比如希望少问废话、重大动作先确认、结果要结构化。

COMPASS 把这些东西放到本地结构里管理，而不是只靠模型临时记忆。

## 四个核心 skill

| Skill | 主要用途 | 适合什么时候用 |
| --- | --- | --- |
| `$task-clarifier` | 需求澄清 | 任务模糊、风险高、成本高，先问清楚再做。 |
| `$task-forest` | 任务森林 / 任务图 | 长项目、多子任务、多次会话，需要记录进度、依赖、偏差和待办。 |
| `$session-handoff-prompt` | 新会话续接提示词 | 当前对话太长，想开新会话继续，又不想重讲全部背景。 |
| `$user-profile-keeper` | 本地用户画像 | 想让 AI 记住长期协作偏好、风险边界和常见沟通习惯。 |

一句话概括：

```text
$task-clarifier 负责先问清楚。
$task-forest 负责记住任务做到哪里。
$session-handoff-prompt 负责把旧会话交接给新会话。
$user-profile-keeper 负责记住你希望 AI 怎么跟你协作。
```

## 我建议怎么用

如果只是偶尔问 AI 一个小问题，不需要装这套。

它更适合这些场景：

1. 你经常让 AI 做长任务，比如搭网站、写项目、改代码、整理资料。
2. 你经常遇到上下文太长，需要开新会话继续。
3. 你希望 AI 不要一上来就执行，而是先把需求、风险和验收标准问清楚。
4. 你想把多个会话里的任务进度沉淀下来，避免每次重新说明。

我的推荐用法是：

1. 新任务不清楚时，先用 `$task-clarifier`。
2. 项目开始变长时，用 `$task-forest` 记录任务结构。
3. 当前会话太长时，用 `$session-handoff-prompt` 生成续接提示词。
4. 确实需要长期个性化协作时，再考虑 `$user-profile-keeper`。

## 安全边界

这个项目的定位是本地优先。根据仓库说明：

1. skills 默认不上传用户画像、任务数据、凭证或浏览器会话信息。
2. `$task-forest` 的任务数据保存在当前 workspace 的 `.agent-workbench/task-forest/`。
3. `$user-profile-keeper` 的用户画像默认保存在本机用户目录下的 `.compass-skills/user-profiles/v1`。
4. 用户画像是本地明文存储，不是加密保险箱。
5. 不应该把 token、密码、私钥、验证码、cookie 等敏感信息保存进画像或任务图。

所以我的建议是：可以先试 `$task-clarifier` 和 `$session-handoff-prompt`，它们更轻；`$user-profile-keeper` 涉及长期本地画像，确认自己能接受明文存储后再用。

## 安装方式

以后我写工具推荐类教程时，都会按这个结构说明安装：先给 **Codex 等 AI 工具自动化安装**，再给 **自己手动安装**。

### 用 Codex 等 AI 工具自动化安装

最稳妥的方式，是让当前 AI Agent 自己审查并安装。可以把下面这段发给 Codex 或其他支持本地文件操作的 Agent：

```text
请安全安装 COMPASS Skills：

Repo: https://github.com/dongshuyan/compass-skills

目标：在确认安全边界后，把 repo 里 skills/ 下的 released skills 安装到当前 agent 可发现的本地 skills 目录。

要求：
1. 先读取 README、SECURITY、AGENTS.md 和每个 skills/*/SKILL.md。
2. 确认没有上传用户数据、读取 credential/token/cookie、远程写入或危险命令。
3. 识别当前 agent 的本地 skills 目录；如果无法可靠识别，只给安装计划，不要猜路径写入。
4. 只复制 skills/ 下的 skill 目录，不复制 .git、缓存、截图、临时文件或用户数据。
5. 安装后运行能运行的本地验证，并说明哪些验证没跑、为什么。
6. 最后告诉我安装位置、安装了哪些 skills、如何调用。
```

这种方式的好处是：Agent 会先读项目说明和安全边界，再根据当前环境判断 skills 应该放到哪里。尤其是不同工具的 skills 目录不一样时，不需要自己猜路径。

### 自己手动安装

手动安装时，核心思路也很简单：把仓库 `skills/` 下这四个目录复制到你的 Agent skills 目录：

```text
task-clarifier
task-forest
session-handoff-prompt
user-profile-keeper
```

安装后，在对话里直接点名调用：

```text
$task-clarifier 帮我先澄清这个需求：...
$task-forest 更新当前项目的任务森林
$session-handoff-prompt 给我生成一个新会话续接 prompt
$user-profile-keeper 初始化我的本地用户画像
```

## 日常使用示例

### 澄清需求

```text
请用 $task-clarifier 对齐下面这个任务：

任务：我想做一个教程网站
约束：先用免费方案，不想维护云服务器
输出：先问关键问题，再复述你的理解让我确认
```

### 记录任务进度

```text
请用 $task-forest 分析当前对话，并维护当前 workspace 的任务森林。

重点记录：长期目标、当前进度、已完成事项、下一步、风险和待确认问题。
先给 proposal，我确认后再写入。
```

### 开新会话继续

```text
请用 $session-handoff-prompt 为当前对话生成一个 balanced 的新 AI 对话续接 prompt。

目标：让我开一个新会话后，可以继续当前项目，不需要重放完整聊天记录。
隐私：本机续接使用 privacy=local。
```

### 建立本地用户画像

```text
请用 $user-profile-keeper 初始化我的本地用户画像。

要求：
1. 只保存到本机，不上传。
2. 不保存 token、密码、私钥、验证码、cookie。
3. 推断性或隐私信息先进入 proposal，等我确认。
4. 完成后告诉我写入了什么、跳过了什么。
```

## 我的评价

这个项目适合已经高频使用 Codex、Claude Code、OpenCode 这类 Agent 的人。它不是“装完立刻变强”的魔法插件，更像一套工作流：让 AI 在做长任务时先对齐需求、持续记录任务、必要时交接上下文，并逐渐适应用户的协作习惯。

如果你的 AI 工作主要是一次性问答，它可能有点重；如果你经常做连续几天甚至几周的 AI 协作项目，它就很值得试。
