interface Blok {
  [bkey: string]: any
  text: string
}

export default function resolveComponent(component: string, blok: Blok) {
  switch (component) {
    case 'RichTextButton':
      return `<div class="w-full my-4">
        <button class="inline-block text-white bg-slate-800 cursor-pointer py-1 px-3 mx-auto">
          ${blok.text}
        </button>
      </div>`
    default:
      return `Component ${component} not found`
  }
}