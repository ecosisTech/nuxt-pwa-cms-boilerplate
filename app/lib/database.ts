import Level from 'level-ts'

const database = new Level.default('./.db') // TODO Fix

export const useDatabase = () => {
  return database
}
