'use client'

import { ChangeEvent, useState } from 'react'

export function MediaPicker() {
  const [preview, setPreview] = useState<null | string>(null)

  function onMediaSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target

    if (!files) {
      return
    }

    const previewURL = URL.createObjectURL(files[0])

    setPreview(previewURL)
  }

  return (
    <>
      <input
        onChange={onMediaSelected}
        name="coverUrl"
        type="file"
        id="media"
        accept="image/*"
        className="invisible h-0 w-0"
      />

      {preview && (
        // eslint-disable-next-line
        <img
          src={preview}
          alt="preview"
          className="aspect-video w-full rounded-lg object-cover"
        />
      )}
    </>
  )
}
