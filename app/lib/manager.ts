import Level from 'level-ts'

export class DatabaseManager {
  private userDatabase: Level.default
  private settingsDatabase: Level.default
  private database: Level.default // Database for managing other databases

  constructor() {
    this.userDatabase = new Level.default('./.db/user')
    this.settingsDatabase = new Level.default('./.db/settings')
    this.database = new Level.default('./.db')
  }

  // Database Functions
  async put(id: string, data: object) {
    try {
      return await this.database.put(id, data)
    } catch (error) {
      throw new Error(error)
    }
  }

  async exists(id: string) {
    try {
      return await this.database.exists(id, data)
    } catch (error) {
      throw new Error(error)
    }
  }

  async get(id: string) {
    try {
      const userExists = this.database.get(id)
      if (!userExists) {
        throw new Error('Document does not exist!')
      }
    } catch (error) {
      throw new Error(error)
    }
    return await this.database.get(id)
  }

  async all(id: string) {
    try {
      return await this.database.all()
    } catch (error) {
      throw new Error(error)
    }
  }

  async del(id: string) {
    try {
      return await this.database.del(userID)
    } catch (error) {
      throw new Error(error)
    }
  }

  // User Functions
  async addUser(userID: string, userData: object) {
    try {
      return await this.userDatabase.put(userID, userData)
    } catch (error) {
      throw new Error(error)
    }
  }

  async updateUser(userID: string, userData: object) {
    try {
      return await this.userDatabase.put(userID, userData)
    } catch (error) {
      throw new Error(error)
    }
  }

  async getUser(userID: string) {
    try {
      const userExists = this.userDatabase.exists(userID)
      if (!userExists) {
        throw new Error('User does not exist!')
      }
    } catch (error) {
      throw new Error(error)
    }
    return await this.userDatabase.get(userID)
  }

  async getAllUser() {
    try {
      return await this.userDatabase.all()
    } catch (error) {
      throw new Error(error)
    }
  }

  async deleteUser(userID: string) {
    try {
      return await this.userDatabase.del(userID)
    } catch (error) {
      throw new Error(error)
    }
  }

  // Settings Functions
  async updateSettings(settingsData: object) {
    try {
      return await this.settingsDatabase.put('appSettings', settingsData)
    } catch (error) {
      throw new Error(error)
    }
  }

  async getSettings() {
    try {
      return await this.settingsDatabase.get('appSettings')
    } catch (error) {
      throw new Error(error)
    }
  }

  // Database Functions
  async createDatabase(databaseName: string) {
    try {
      return await this.database.put(databaseName, 'created')
    } catch (error) {
      throw new Error(error)
    }
  }

  async accessDatabase(databaseName: string) {
    try {
      return await new Level.default(`./.db/${databaseName}`)
    } catch (error) {
      throw new Error(error)
    }
  }

  async deleteDatabase(databaseName: string) {
    try {
      await this.closeDatabase(databaseName)
      return await this.database.del(databaseName)
    } catch (error) {
      throw new Error(error)
    }
  }

  async closeDatabase(databaseName: string) {
    try {
      await this.accessDatabase(databaseName).close()
    } catch (error) {
      throw new Error(error)
    }
  }

  // Database Management Functions
  async closeDatabases() {
    await this.userDatabase.close()
    await this.settingsDatabase.close()
    await this.database.close()
  }
}
