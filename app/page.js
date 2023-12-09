import Body from '@/Components/Body'
import React from 'react'

const page = () => {
  return (
    <>
      <div id='mainContainer' className='grid grid-rows-auto grid-cols-4 gap-x-6 gap-y-10 mx-16 my-16'>
        <Body
          link="https://getcssscan.com/css-box-shadow-examples"
          heading="Scancss-box shadow"
          desc="93 beautiful box-shadow example"
        />

        <Body
          link="https://getcssscan.com/css-buttons-examples"
          heading="Scancss- buttons"
          desc="93 beautiful button example"
        />

        <Body
          link="https://10015.io/tools/css-glassmorphism-generator"
          heading="Glass-morphism"
          desc="Glassmorphism Generator is a free tool for generating CSS frosted-glass effect with background blur."
        />

        <Body
          link="https://unicornicons.com/"
          heading="Unicornicons"
          desc="Unicorn icons are a collection of animated icons."
        />

        <Body
          link="https://app.haikei.app/"
          heading="Haikai App"
          desc="A web-based design tool to generate unique SVG design assets for websites, social media, blog posts, desktop and mobile wallpapers, posters, and more."
        />

        <Body
          link="https://uiverse.io/all"
          heading="Uiverse"
          desc="Library of free and customizable UI elements made with CSS or Tailwind. It's all open-source, and it's all free."
        />

        <Body
          link="https://9elements.github.io/fancy-border-radius/"
          heading="Fancy border radius"
          desc="A visual generator to build organic looking shapes with the help of CSS3 border-radius property."
        />

        <Body
          link="https://10015.io/"
          heading="10015"
          desc="All in one... loader, glass morphism, fancy border etc."
        />

        <Body
          link="https://icons.getbootstrap.com/"
          heading="Bootstrap"
          desc="Bootstrap offers free svg icon that can be use in the html only by coping svg code or by use the class."
        />

        <Body
          link="https://tailwindcss.com/docs/installation"
          heading="Tailwind css"
          desc="Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML."
        />

        <Body
          link="https://fonts.google.com/"
          heading="Google fonts"
          desc="Without downloading the fonts just by import you can use the fonts."
        />

        <Body
          link="https://ideogram.ai/t/trending"
          heading="ideogram"
          desc="Image generator but you can use it to make logos for free."
        />

        <Body
          link="https://www.remove.bg/"
          heading="Remove bg"
          desc="Free to use background remover."
        />

        <Body
          link="https://vectorizer.ai/"
          heading="Vertorizer ai"
          desc="It helps to convert jpg/png images to a vertor image."
        />

        <Body
          link="https://blobmaker.app/"
          heading="Blobmaker"
          desc="Blobmaker is a free generative design tool made with by z creative labs, to help you quickly create random, unique, and organic-looking SVG shapes."
        />

        <Body
          link="https://deeditor.com/"
          heading="Deeditor"
          desc="Change SVG Color Online. DeEditor allows you to make icons from SVG files in a really simple way. Just upload, edit colors and download in PNG, SVG, or PDF file ."
        />
      </div>
    </>
  )
}

export default page
