const {TelegramHandler} = require('bottender')

const feeling = {
  greening: '😀',
  confused: '😕',
  crying:   '😢',
}

function withReply (event) {
  return ({data}) => event === data
}

module.exports = new TelegramHandler()
  .onText(/start/, async context => {
    await context.sendMessage('How do you feel today?', {
      reply_markup: {
        inline_keyboard: [
          [{text: feeling.greening, callback_data: feeling.greening}],
          [{text: feeling.confused, callback_data: feeling.confused}],
          [{text: feeling.crying, callback_data: feeling.crying}]
        ]
      }
    })
  })
  .onText(/Freddy/ui, async context => {
    await context.sendSticker('CAADAgADQAADyIsGAAE7MpzFPFQX5QI', {
      disable_notification: true,
    })
  })
  .onCallbackQuery(withReply(feeling.crying), async context => {
    await context.sendMessage(`Oh no, what happened? Why are you crying ${feeling.crying}?`)
  })
  .onCallbackQuery(withReply(feeling.greening), async context => {
    await context.sendMessage(`Cool you're feeling good ${feeling.greening}!`)
  })
  .onCallbackQuery(withReply(feeling.confused), async context => {
    await context.sendMessage(`What are you confused by ${feeling.confused}?`)
  })
