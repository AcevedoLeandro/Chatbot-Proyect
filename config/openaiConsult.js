import openai from "./instanceOpenai.js";

export const consultaOpenAI = async (consulta) => {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    store: true,
    messages: [{ role: "user", content: consulta }],
  });

  return completion.choices[0].message.content;
};
