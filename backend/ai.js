const OpenAI = require('openai')

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

async function main() {
  const response = await openai.completions.create({
    model: 'text-davinci-003',
    prompt: 'This is a test',
    temperature: 0.6,
    max_tokens: 200,
  })
}

main()
