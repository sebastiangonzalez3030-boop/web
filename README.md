# Cobramos PH - Sitio Web Corporativo

Sitio web corporativo moderno, responsivo y de alta conversión para **Cobramos PH: Gestión de cartera en propiedad horizontal** en Colombia (amparado bajo la Ley 675 de 2001).

---

## 🎨 Identidad Visual y Paleta de Colores

Basada estrictamente en el logo oficial corporativo:
- **Azul Marino Institucional (`#0F2B5C`)**: Header, tipografía de títulos principales, secciones institucionales y footer.
- **Dorado de Alta Conversión (`#D49A2B`)**: Botones de llamada a la acción principal (CTA) *"SOLICITAR DIAGNÓSTICO"*, bordes destacados y detalles premium.
- **Verde de Éxito & Solvencia (`#28A745`)**: Badges de garantía, tasas de recaudo positivo, íconos de verificación y botón flotante de WhatsApp.
- **Fondos Neutros Modernos**: Blanco Puro (`#FFFFFF`) y Gris Claro Soft (`#F8F9FA` / `#F1F5F9`).

---

## 🏗️ Estructura del Sitio y Secciones

1. **Top Bar Institucional**: Teléfono PBX, correo oficial, cobertura nacional y certificación en Ley 675 de 2001.
2. **Header Sticky & Navegación**:
   - Logo oficial recortado y optimizado con transparencia (`assets/logo-trimmed.png`).
   - Menú horizontal de navegación suave (Inicio, Diagnóstico, Cómo Funciona, Soluciones, Calculadora, Administradores, FAQ, Contacto).
   - Botón *"Acceso Clientes"* con modal interactivo para Administradores y Copropietarios.
   - Botón CTA Dorado *"SOLICITAR DIAGNÓSTICO"* con efecto glow.
   - Menú responsive colapsable para dispositivos móviles.
3. **Hero Section (Alto Impacto)**:
   - Titular contundente: *"Recuperamos la Cartera de su Edificio sin Conflictos y con Respaldo Legal"*.
   - Subtítulo de posicionamiento Fintech/LegalTech.
   - Métricas de confianza en franja: 94% de acuerdos cumplidos, $0 costo inicial para el edificio, primeros recaudos en 15 días, +380 copropiedades asesoradas.
   - Contenedor visual corporativo con foto arquitectónica y tarjetas flotantes de recaudo en tiempo real.
4. **Problema y Diagnóstico**:
   - Frase central: **"SU EDIFICIO TIENE CARTERA. NOSOTROS TENEMOS UN PLAN."**
   - 4 tarjetas de dolor crítico: Deterioro de zonas comunes, Desgaste vecinal, Deudas con empresas de vigilancia/aseo y Riesgo de prescripción legal.
   - Cuadro comparativo: Cobranza Tradicional vs. Solución Cobramos PH.
5. **Proceso "Cómo Funciona" (Flujo en 5 Pasos)**:
   - **1. Diagnosticamos**: Auditoría y segmentación por edades de mora sin costo.
   - **2. Organizamos**: Plan estratégico concertado con el Consejo de Administración.
   - **3. Gestionamos**: Contacto asertivo multicanal (llamadas, WhatsApp certificado, requerimientos).
   - **4. Recuperamos**: El dinero ingresa 100% directo a la cuenta bancaria de la copropiedad.
   - **5. Reportamos**: Dashboards y bitácoras quincenales para Asambleas.
6. **Soluciones (3 Cards Principales)**:
   - **Gestión y Recuperación de Cartera**: $0 costo directo para la copropiedad (honorarios imputables legalmente al deudor moroso).
   - **Cobramos Liquidez (10%)**: Anticipo y compra de cartera calificada para emergencias locativas o pago urgente a contratistas.
   - **Cobramos Servicios (5% + 1%)**: Acompañamiento mensual continuo para mantener la mora por debajo del 3%.
7. **Simulador y Calculadora Interactiva**:
   - Control deslizante de cartera morosa (desde $10M hasta $300M COP) y número de unidades.
   - Proyección dinámica de recaudo en 60 días, $0 de gasto para el conjunto y valor de anticipo con Cobramos Liquidez.
8. **Módulos Especiales**:
   - **Para Administradores y Miembros del Consejo**: Blindaje de imagen, cero fricción con vecinos, asesoría en Ley 675.
   - **Red de Proveedores Conectada**: Garantía de pago a empresas de seguridad privada, aseo y mantenimiento mediante cobranza focalizada.
   - **Grandes Copropiedades & Empresas**: Centros comerciales, parques logísticos e industriales y PH mixtas.
9. **Preguntas Frecuentes (FAQ Accordion)**:
   - 6 preguntas críticas resueltas con acordeón interactivo y respuestas jurídicas sólidas.
10. **Formulario de Solicitud de Diagnóstico**:
    - Campos completos para caracterizar la copropiedad (Nombre, Cargo, Conjunto, Ciudad, Teléfono, Email, Cartera estimada, Unidades, Solución de interés).
    - Validación y confirmación visual inmediata con modal de radicación.
11. **Footer Corporativo**:
    - Identidad, datos de la sede en Bogotá, enlaces legales (Términos, Privacidad, Habeas Data Ley 1581) y redes sociales.
12. **Botón Flotante de WhatsApp**:
    - Botón verde `#28A745` con efecto de pulso y tooltip automático para contacto directo.

---

## 🚀 Cómo Visualizar el Proyecto

### Opción 1: Abrir directamente en el navegador
Haga doble clic en `index.html` o abra el archivo en Google Chrome, Safari, Microsoft Edge o Firefox.

### Opción 2: Servidor local ligero (Python)
Desde la terminal en esta carpeta:
```bash
python3 -m http.server 8000
```
Luego visite: [http://localhost:8000](http://localhost:8000)

---

## 📁 Archivos del Proyecto

```
CobramosPH/
├── index.html              # Estructura HTML5 completa, Tailwind CDN y FontAwesome
├── css/
│   └── custom.css          # Estilos adicionales, animaciones de pulso, glow y tipografía
├── js/
│   └── main.js             # Lógica interactiva (Sticky header, FAQ, Calculadora, Modal, Formulario)
├── assets/
│   ├── logo.png            # Logo oficial original
│   ├── logo-trimmed.png    # Logo recortado y optimizado con fondo transparente
│   └── favicon-icon.png    # Ícono corporativo para la pestaña del navegador
└── README.md               # Documentación corporativa del proyecto
```
