const background = {
    name: "background",
    title: "Background Video",
    type: "document",
    fields: [
    {
      name: "video",
      type: "file",
      title: "Video File",
      description: "Upload your background video",
    },
    {
      name: "loop",
      type: "boolean",
      title: "Loop Video",
      description: "Should the video loop continuously?",
      initialValue: true,
    },
    {
      name: "muted",
      type: "boolean",
      title: "Mute Video",
      description: "Should the video sound be muted?",
      initialValue: true,
    },
  ],
};

export default background;