#!/usr/bin/env node

import * as fs from 'fs'
import { resolve } from 'path'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

const argv = yargs(hideBin(process.argv))
  .option('level', {
    type: 'number',
    required: true,
    describe: 'Starting level to be incremented',
  })
  .parseSync()

const LEVELS_DIR = resolve(__dirname, '../src/levels')

const levels = fs
  .readdirSync(LEVELS_DIR)
  .map((file) => parseInt(file.replace('.ts', '')))
  .sort((a, b) => b - a)
  .filter((level) => level >= argv.level)

levels.forEach((level) => {
  const currentFilePath = resolve(LEVELS_DIR, `${level}.ts`)
  const file = fs.readFileSync(currentFilePath).toString()

  fs.writeFileSync(
    resolve(LEVELS_DIR, `${level + 1}.ts`),
    file.replace(
      `export const level = ${level}`,
      `export const level = ${level + 1}`,
    ),
  )

  fs.unlinkSync(currentFilePath)
})
