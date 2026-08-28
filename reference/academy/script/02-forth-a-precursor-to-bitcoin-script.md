> For the complete documentation index, see [llms.txt](https://hub.bsvblockchain.org/llms.txt). Markdown versions of documentation pages are available by appending `.md` to page URLs; this page is available as [Markdown](https://hub.bsvblockchain.org/higher-learning/bsv-academy/introduction-to-bitcoin-script/chapter-1-about-bitcoin-script/02-forth-a-precursor-to-bitcoin-script.md).

# 02 - FORTH: A Precursor to Bitcoin Script

In the late 60's Charles 'Chuck' Moore developed FORTH as a fully interactive stack based programming environment that ran on a microcontroller and provided the user with a simple, command line entry based means to enter commands and build FORTH words and programs. FORTH is different to many programming languages in that it runs 'live' while the programmer is working on their software, allowing new 'words' to be defined, tested, redefined and debugged without having to recompile or restart the system. All elements of the syntax are defined as words, including variables such as constants and basic operators and the system uses a simple stack to pass instructions between words.

The following video is a 2 minute overview of Forth.

{% embed url="<https://www.youtube.com/watch?v=ml9s2HfpDZY>" %}

Stack based programming such as that which is used in FORTH is called Reverse Polish Notation (RPN). In RPN, the operands needed for a function must be pushed onto the stack *prior* to the word that processes them being called. Data types are fluid, with each item existing as a bytevector in memory. Each function uses the data items it expects to see. A function will treat the bytevector however it is programmed to. It may be seen as an integer, a string of text, a floating point number or any other type of data. If a word performs a function that consumes more than one data point, it will expect the right number of items of the right types to be on the stack.

For example, to multiply 2 by 3, the user would input '2 3 \*', or '2 3 multiply'. This would consume the 2 and 3 from the stack and replace them with a 6. If there are less than 2 items, or they are too big to be integers, the program ends with an error.

All forth words are built from a set of primitive words. These are built upon to create application specific functionality that can easily interact with microprocessor input/output hardware. Digital and analog signals can be evaluated, and techniques such as fast fourier transforms can be implemented to filter and read real world data. This ensures a high degree of efficiency and flexibility for any given system or architecture. A basic set of words can be extended to create complex applications in a tiny space.


---

# Agent Instructions
This documentation is published with GitBook. GitBook is the documentation platform designed so that both humans and AI agents can read, navigate, and reason over technical content effectively. Learn more at gitbook.com.

## Querying This Documentation
If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter, and the optional `goal` query parameter:

```
GET https://hub.bsvblockchain.org/higher-learning/bsv-academy/introduction-to-bitcoin-script/chapter-1-about-bitcoin-script/02-forth-a-precursor-to-bitcoin-script.md?ask=<question>&goal=<endgoal>
```

`ask` is the immediate question: it should be specific, self-contained, and written in natural language.
`goal` is optional and describes the broader end goal you are ultimately trying to accomplish on behalf of the user. GitBook uses it to tailor the answer towards what is most useful for that goal.

The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.
