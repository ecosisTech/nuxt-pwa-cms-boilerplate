import Level from 'level-ts'

const database = new Level.default('./.db') // TODO Fix
const userDatabase = new Level.default('./.db/user') // TODO Fix

export const useDatabase = () => {
  return database
}

export const useUserDatabase = () => {
  return userDatabase
}
