# mi-perfil

App creada con [Expo](https://expo.dev/) que muestra una tarjeta de perfil (avatar, nombre, rol y una lista de habilidades). Proyecto de práctica para dominar el flujo básico de Expo: crear proyecto, correr en dispositivo real y editar con Fast Refresh.

## Vista previa

La tarjeta incluye:

- Avatar circular
- Nombre y rol
- 3 habilidades en forma de "pills"

## Requisitos previos

- Node.js 20 o superior (`node -v`)
- App **Expo Go** instalada en tu teléfono (Android o iOS)
- Cuenta gratuita en [expo.dev](https://expo.dev/) (opcional para correr localmente, necesaria para algunos flujos de publicación)

## Cómo correr el proyecto

1. Clona el repositorio:

   ```bash
   git clone <url-del-repositorio>
   cd mi-perfil
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npx expo start
   ```

4. Escanea el código QR que aparece en la terminal/navegador con la app **Expo Go** desde tu teléfono:
   - **Android**: abre Expo Go y usa la opción "Scan QR code".
   - **iOS**: usa la app nativa de Cámara para escanear el QR, que abrirá Expo Go automáticamente.

5. La app se abrirá en tu teléfono mostrando la tarjeta de perfil.

## Editar la UI (Fast Refresh)

Todo el contenido visual está en `App.js`. Al guardar cambios en ese archivo mientras `npx expo start` está corriendo, la pantalla en tu teléfono se actualiza automáticamente gracias a **Fast Refresh**, sin perder el estado de la app.

Para personalizar la tarjeta, edita en `App.js`:

- `HABILIDADES`: arreglo con las 3 habilidades mostradas.
- El texto dentro de los componentes `<Text>` para nombre y rol.
- La propiedad `uri` del `<Image>` para cambiar el avatar.

## Estructura principal

```
mi-perfil/
├── App.js          # Componente principal con la tarjeta de perfil
├── app.json        # Configuración de la app Expo
├── index.js        # Punto de entrada
├── assets/         # Íconos y splash screen
└── package.json
```

## Scripts disponibles

| Comando            | Descripción                              |
|--------------------|-------------------------------------------|
| `npm start`        | Inicia el servidor de desarrollo de Expo  |
| `npm run android`  | Abre la app en un emulador/dispositivo Android |
| `npm run ios`      | Abre la app en un simulador iOS (requiere macOS) |
| `npm run web`      | Corre la app en el navegador              |
