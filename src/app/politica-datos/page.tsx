'use client';

import Link from 'next/link';

export default function PoliticaDatos() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: '#27312d', color: '#8e8066' }}>
      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6 md:p-8 backdrop-blur-sm border-b" style={{ backgroundColor: 'rgba(39, 49, 45, 0.9)', borderBottomColor: 'rgba(142, 128, 102, 0.2)' }}>
        <Link href="/" className="text-2xl font-bold tracking-wider" style={{ color: '#8e8066' }}>
          ÁNVAR 93
        </Link>
        <Link href="/" className="px-6 py-2 rounded-full transition-all" style={{ backgroundColor: '#8e8066', color: '#27312d' }}>
          Volver al Inicio
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto py-12 px-6">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#8e8066' }}>
            Política de Tratamiento de Datos Personales
          </h1>
          <p className="text-lg" style={{ color: '#8e8066', opacity: 0.8 }}>
            Ley 1581 de 2012 - República de Colombia
          </p>
        </div>

        <div className="space-y-8" style={{ color: '#8e8066', opacity: 0.9 }}>
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#8e8066' }}>1. MARCO LEGAL</h2>
            <p className="leading-relaxed mb-4">
              La presente Política de Tratamiento y Protección de Datos Personales se establece en cumplimiento de la
              Ley 1581 de 2012 &ldquo;Por la cual se dictan disposiciones generales para la protección de datos personales&rdquo;
              y el Decreto 1377 de 2013, que desarrollan el derecho constitucional que tienen todas las personas a
              conocer, actualizar y rectificar las informaciones que se hayan recogido sobre ellas en bases de datos
              o archivos de entidades públicas o privadas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#8e8066' }}>2. IDENTIFICACIÓN DEL RESPONSABLE DEL TRATAMIENTO</h2>
            <p className="leading-relaxed mb-4">
              <strong>Razón social:</strong> EQUÁNIME S.A.S.<br />
              <strong>Domicilio:</strong> Cra 11 No. 93A - 53 Piso 4, Bogotá – Colombia<br />
              <strong>Correo electrónico para notificaciones judiciales:</strong> saladeventas@equanime.co<br />
              <strong>Correo electrónico para consultas sobre datos personales:</strong> saladeventas@equanime.co<br />
              <strong>Teléfono:</strong> +57 (310) 514 6696<br />
              <strong>Página web:</strong> www.equanime.co
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#8e8066' }}>3. DEFINICIÓN DE DATOS PERSONALES</h2>
            <p className="leading-relaxed mb-4">
              Para efectos de esta política, se entiende por dato personal cualquier información vinculada o que pueda
              asociarse a una o varias personas naturales determinadas o determinables. Se incluyen:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Datos de identificación:</strong> Nombres, apellidos, documento de identidad, fecha y lugar de nacimiento, edad, estado civil</li>
              <li><strong>Datos de contacto:</strong> Dirección de domicilio y correspondencia, teléfonos, correo electrónico</li>
              <li><strong>Datos demográficos:</strong> Género, nacionalidad, profesión, ocupación</li>
              <li><strong>Datos económicos y financieros:</strong> Ingresos, egresos, referencias comerciales, información crediticia, capacidad de pago</li>
              <li><strong>Datos contractuales:</strong> Información relacionada con contratos, obligaciones, historiales de pagos</li>
              <li><strong>Datos de preferencias comerciales:</strong> Intereses inmobiliarios, preferencias de productos y servicios</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#8e8066' }}>4. FINALIDADES DEL TRATAMIENTO</h2>
            <p className="leading-relaxed mb-4">
              EQUÁNIME S.A.S. recolecta y trata datos personales para las siguientes finalidades específicas:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Establecer contacto con personas interesadas en el proyecto inmobiliario ÁNVAR 93</li>
              <li>Suministrar información comercial sobre el proyecto, incluyendo precios, especificaciones, disponibilidad y condiciones de venta</li>
              <li>Programar y coordinar citas, visitas y presentaciones del proyecto</li>
              <li>Gestionar procesos de pre-venta, venta y postventa de unidades residenciales</li>
              <li>Evaluar la capacidad crediticia y financiera de potenciales compradores</li>
              <li>Ejecutar y administrar contratos de promesa de compraventa y compraventa</li>
              <li>Cumplir obligaciones legales, contractuales, contables y tributarias</li>
              <li>Realizar actividades de mercadeo, promoción y publicidad</li>
              <li>Desarrollar estudios de mercado, estadísticos y de satisfacción del cliente</li>
              <li>Gestionar el servicio al cliente y atención de peticiones, quejas y reclamos</li>
              <li>Mantener comunicación institucional y comercial</li>
              <li>Prevenir fraudes y actividades ilícitas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#8e8066' }}>5. DERECHOS DE LOS TITULARES</h2>
            <p className="leading-relaxed mb-4">
              Conforme a la Ley 1581 de 2012, los titulares de datos personales tienen los siguientes derechos:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Conocer, actualizar y rectificar</strong> sus datos personales frente a los responsables del tratamiento</li>
              <li><strong>Solicitar prueba</strong> de la autorización otorgada al responsable del tratamiento</li>
              <li><strong>Ser informado</strong> respecto del uso que se le ha dado a sus datos personales</li>
              <li><strong>Presentar quejas</strong> ante la Superintendencia de Industria y Comercio por infracciones a la ley</li>
              <li><strong>Revocar la autorización</strong> y/o solicitar la supresión del dato cuando en el tratamiento no se respeten los principios, derechos y garantías constitucionales y legales</li>
              <li><strong>Acceder de forma gratuita</strong> a sus datos personales que hayan sido objeto de tratamiento</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#8e8066' }}>6. AUTORIZACIÓN PARA EL TRATAMIENTO</h2>
            <p className="leading-relaxed mb-4">
              El tratamiento de datos personales requiere autorización previa e informada del titular. Esta autorización
              puede ser otorgada por escrito, de forma oral, o mediante conductas inequívocas del titular que permitan
              concluir de forma razonable que otorgó la autorización.
            </p>
            <p className="leading-relaxed">
              Al proporcionar datos personales a EQUÁNIME S.A.S., el titular autoriza de manera libre, previa, expresa
              e informada el tratamiento de sus datos personales conforme a esta política y para las finalidades descritas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#8e8066' }}>7. PROCEDIMIENTO PARA EJERCER LOS DERECHOS</h2>
            <p className="leading-relaxed mb-4">
              Los titulares podrán ejercer sus derechos a través de los siguientes canales:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Correo electrónico:</strong> saladeventas@equanime.co</li>
              <li><strong>Correo físico:</strong> Cra 11 No. 93A - 53 Piso 4, Bogotá – Colombia</li>
              <li><strong>Teléfono:</strong> +57 (310) 514 6696</li>
              <li><strong>Presencialmente:</strong> En nuestras oficinas en horario de atención</li>
            </ul>
            <p className="leading-relaxed mt-4">
              <strong>Requisitos de la solicitud:</strong> La solicitud deberá contener como mínimo: identificación del titular,
              descripción clara y precisa de los datos personales respecto de los cuales se solicita ejercer alguno de los derechos,
              dirección y datos de contacto del titular, y firma del titular.
            </p>
            <p className="leading-relaxed mt-4">
              <strong>Términos de respuesta:</strong> Las consultas serán atendidas en un término máximo de diez (10) días hábiles
              contados a partir de la fecha de recibo. Los reclamos serán resueltos en un término máximo de quince (15) días hábiles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#8e8066' }}>8. MEDIDAS DE SEGURIDAD</h2>
            <p className="leading-relaxed mb-4">
              EQUÁNIME S.A.S. ha adoptado las medidas técnicas, humanas y administrativas necesarias para otorgar seguridad
              a los registros y evitar su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento, que incluyen:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Control de acceso a la información mediante usuarios y contraseñas</li>
              <li>Cifrado de datos sensibles durante su transmisión y almacenamiento</li>
              <li>Respaldo periódico de la información</li>
              <li>Capacitación del personal en protección de datos</li>
              <li>Políticas internas de manejo de información</li>
              <li>Contratos de confidencialidad con terceros que accedan a datos personales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#8e8066' }}>9. ÁREA RESPONSABLE</h2>
            <p className="leading-relaxed">
              El área encargada de la atención de peticiones, consultas y reclamos relacionados con el tratamiento de
              datos personales es el Departamento de Atención al Cliente, el cual puede ser contactado a través de los
              canales mencionados en esta política.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#8e8066' }}>10. VIGENCIA Y MODIFICACIONES</h2>
            <p className="leading-relaxed">
              Esta política rige a partir del 1 de enero de 2024. EQUÁNIME S.A.S. se reserva el derecho de modificar
              la presente política cuando lo considere conveniente. Los cambios serán comunicados oportunamente a los
              titulares a través de los medios habituales de contacto y publicados en nuestro sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#8e8066' }}>11. INFORMACIÓN DE CONTACTO</h2>
            <p className="leading-relaxed mb-4">
              Para consultas, peticiones o reclamos relacionados con el tratamiento de datos personales:
            </p>
            <div className="mt-4 p-6 rounded-xl" style={{ backgroundColor: 'rgba(142, 128, 102, 0.1)' }}>
              <p><strong>Correo electrónico:</strong> saladeventas@equanime.co</p>
              <p><strong>Teléfono:</strong> +57 (310) 514 6696</p>
              <p><strong>Dirección:</strong> Cra 11 No. 93A - 53 Piso 4, Bogotá – Colombia</p>
              <p><strong>Horario de atención:</strong> Lunes a viernes de 8:00 AM a 6:00 PM, sábados de 9:00 AM a 1:00 PM</p>
              <p><strong>Página web:</strong> www.equanime.co</p>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-block px-8 py-3 rounded-full font-semibold transition-all hover:scale-105"
            style={{ backgroundColor: '#8e8066', color: '#27312d' }}
          >
            Volver al Inicio
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 mt-12" style={{ backgroundColor: 'rgba(142, 128, 102, 0.1)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <p style={{ color: '#8e8066', opacity: 0.7 }}>
            &copy; 2024 ÁNVAR 93. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}