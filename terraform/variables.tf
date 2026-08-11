variable "subscription_id" {
  description = "Azure Subscription ID"
  type        = string
}

variable "location" {
  description = "Azure Region"
  type        = string
}

variable "resource_group_name" {
  description = "Resource Group Name"
  type        = string
}

variable "vnet_name" {
  description = "Virtual Network Name"
  type        = string
}

variable "vnet_address_space" {
  description = "VNet Address Space"
  type        = list(string)
}

variable "subnet_name" {
  description = "AKS Subnet Name"
  type        = string
}

variable "subnet_address_prefixes" {
  description = "Subnet Address Prefix"
  type        = list(string)
}

variable "project_name" {

  description = "Project name"

  type = string

}

variable "acr_name" {
  description = "Azure Container Registry Name"
  type        = string
}

variable "aks_name" {
  description = "AKS Cluster Name"
  type        = string
}

variable "node_count" {
  description = "Number of AKS Nodes"
  type        = number
}

variable "vm_size" {
  description = "AKS VM Size"
  type        = string
}

variable "db_user" {
  description = "Database Username"
  type        = string
}

variable "db_password" {
  description = "Database Password"
  type        = string
  sensitive   = true
}

variable "db_name" {
  description = "Database Name"
  type        = string
}

variable "mysql_root_password" {
  description = "MySQL Root Password"
  type        = string
  sensitive   = true
}