# Script para subir un commit a GitHub
# Ejecutar: .\push-commit.ps1

$projectPath = Get-Location
Write-Host "[*] Directorio del proyecto: $projectPath" -ForegroundColor Cyan

# Verificar si es un repositorio git
if (-Not (Test-Path ".git")) {
    Write-Host "`n[!] No hay repositorio git. Inicializando..." -ForegroundColor Yellow
    git init
    Write-Host "[OK] Repositorio inicializado" -ForegroundColor Green
}

# Solicitar información al usuario
Write-Host "`n[INFO] Por favor, proporciona la siguiente información:" -ForegroundColor Cyan
$commitMessage = Read-Host "Mensaje del commit"
$remoteUrl = Read-Host "URL del repositorio remoto en GitHub (ej: https://github.com/usuario/repo.git)"

# Agregar todos los cambios
Write-Host "`n[*] Agregando cambios..." -ForegroundColor Cyan
git add .

# Crear commit
Write-Host "[*] Creando commit..." -ForegroundColor Cyan
git commit -m "$commitMessage"

if ($LASTEXITCODE -ne 0) {
    Write-Host "[!] No hay cambios para commitear o hubo un error" -ForegroundColor Yellow
    exit
}

# Configurar el remote si no existe
$currentRemote = git remote get-url origin 2>$null
if ($currentRemote -eq "" -or $LASTEXITCODE -ne 0) {
    Write-Host "`n[*] Configurando remote..." -ForegroundColor Cyan
    git remote add origin $remoteUrl
}

# Obtener la rama principal
$branch = git rev-parse --abbrev-ref HEAD
Write-Host "`n[*] Subiendo cambios a GitHub (rama: $branch)..." -ForegroundColor Cyan
git push -u origin $branch

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n[OK] ¡Commit subido exitosamente!" -ForegroundColor Green
} else {
    Write-Host "`n[ERROR] Error al subir el commit. Verifica tu conexión o credenciales." -ForegroundColor Red
}
