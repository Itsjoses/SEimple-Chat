export type ConversationCheck = {
  startConversation: boolean;
  endConversation: boolean;
  data: Message;
};

export type Message = {
  author: string;
  message: string | undefined | null;
};

export type AllMessage = {
    allMessage: Message[] | null;
  };


  export const fakeMessage: Message[] = [
    {
      author: "apple",
      message:
        "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
    },
    {
      author: "orange",
      message:
        "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
    },
    {
      author: "orange",
      message:
        "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
    },
    {
      author: "apple",
      message:
        "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
    },
    {
      author: "apple",
      message:
        "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
    },
    {
      author: "apple",
      message:
        "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
    },
    {
      author: "orange",
      message:
        "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
    },
    {
      author: "orange",
      message:
        "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
    },
    {
      author: "apple",
      message:
        "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
    },
    {
      author: "orange",
      message:
        "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
    },
    {
      author: "apple",
      message:
        "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
    },
    {
      author: "orange",
      message:
        "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
    },
    {
      author: "orange",
      message:
        "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
    },
    {
      author: "apple",
      message:
        "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
    },
    {
      author: "apple",
      message:
        "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
    },
    {
      author: "apple",
      message:
        "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
    },
    {
      author: "orange",
      message:
        "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
    },
    {
      author: "orange",
      message:
        "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
    },
    {
      author: "apple",
      message:
        "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
      },
    {
      author: "orange",
      message:
      "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
    },
  ];