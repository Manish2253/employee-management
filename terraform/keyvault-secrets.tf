resource "azurerm_key_vault_secret" "db_user" {

  name         = "DB-USER"
  value        = var.db_user
  key_vault_id = azurerm_key_vault.employee_kv.id
}

resource "azurerm_key_vault_secret" "db_password" {

  name         = "DB-PASSWORD"
  value        = var.db_password
  key_vault_id = azurerm_key_vault.employee_kv.id
}

resource "azurerm_key_vault_secret" "db_name" {

  name         = "DB-NAME"
  value        = var.db_name
  key_vault_id = azurerm_key_vault.employee_kv.id
}

resource "azurerm_key_vault_secret" "mysql_root_password" {

  name         = "MYSQL-ROOT-PASSWORD"
  value        = var.mysql_root_password
  key_vault_id = azurerm_key_vault.employee_kv.id
}