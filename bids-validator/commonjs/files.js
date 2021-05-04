import { JSDOM } from 'jsdom'

const dom = new JSDOM('<!DOCTYPE html><body></body>')

export const Blob = dom.window.Blob
export const File = dom.window.File
export const FileList = dom.window.FileList
