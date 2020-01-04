import { I18nProvider } from "@lingui/react"
import React from "react"
import Navbar from "."
import { IAvatar } from "../types"

export default {
  title: "Layout/Navbar",
}

const avatarSizes: Array<number> = [400, 200, 150, 100, 64, 50, 30]

const getAvatars = (): Array<IAvatar> => {
  let avatars: Array<IAvatar> = []
  avatarSizes.forEach(size => {
    avatars.push({
      size,
      url: `https://placekitten.com/g/${size}/${size}`,
    })
  })
  return avatars
}

const settings = {
  forumName: "Misago",
}

const user = {
  id: "1",
  name: "JohnDoe",
  avatars: getAvatars(),
}

export const Anonymous = () => (
  <I18nProvider language="en">
    <Navbar settings={settings} user={null} />
  </I18nProvider>
)

export const Authenticated = () => (
  <I18nProvider language="en">
    <Navbar settings={settings} user={user} />
  </I18nProvider>
)