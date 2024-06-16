import React from 'react'

export default function SU110() {
  return (

    <>
    <div style={{ color:'black'}}>

    
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ textAlign: "left" }}>
          <b style={{fontSize:'24px',padding:'120px'}}>SUMMONS (Family Law)</b>
        </div>
        <div style={{ textAlign: "right" }}>
        <b style={{marginRight:'50px'}}>FL-110</b> <br />
          <b style={{marginRight:'20px'}}>CITACIÓN (Derecho familiar)</b>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent:'space-between', alignItems:'center' }}>
        <div style={{ textAlign: "left" }}>
          <div>NOTICE TO RESPONDENT (Name): <input type="text" style={{background:'white' ,border:'1px solid black'}} className='ml-2 w-[45%]'/></div>
          <div className='py-2'>AVISO AL DEMANDADO (Nombre): <input type="text" className='ml-1 bg-[white] border border-black w-[45%]'/></div>
          <div style={{ border: "1px solid black", padding: 10,}}>
            <div>
              You have been sued. Read the information below and on the next page.
            </div>
            <div>
              Lo han demandado. Lea la información a continuación y en la página
              siguiente.
            </div>
          </div>
          <div>
            <div className='py-1'>Petitioner's name is: <input type="text" className='bg-[white] border-black border w-[70%]'/></div>
            <div>Nombre del demandante: <input type="text" className='bg-[white] border-black border w-[60%]'/></div>
            <div
              style={{
                border: "1px solid black",   
                width: '400px',
                height: '52px',
                marginLeft: "90.5%",
                fontSize: '12px'
              }}
            >
              {" "}
              <div className='text-center mt-1'>CASE NUMBER (NÚMERO DE CASO):</div>
            <input type="text" className='w-[90%] ml-4 bg-[white] border border-black '/>
            </div>
          </div>
        </div>
        <div
          style={{
            border: "1px solid black",
            padding: 10,
            width:'35%' ,
            height:'248px',
            fontSize: 12
          }}
        >
          <i>FOR COURT USE ONLY (SOLO PARA USO DE LA CORTE)</i>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          fontSize: 14
        }}
        className='mt-2'
      >
        <div style={{ width: "50%", border: "1px solid black", padding: 2 }} >
          <div className='p-2 px-10'>
            You have <b>30 calendar days</b> after this Summons and Petition are
            served on you to file a Response (form FL-120) at the court and have a
            copy served on the petitioner. A letter, phone call, or court appearance
            will not protect you.
          </div>
          <div className='p-2 px-10'>
            If you do not file your Response on time, the court may make orders
            affecting your marriage or domestic partnership, your property, and
            custody of your children. You may be ordered to pay support and attorney
            fees and costs.
          </div>
          <div className='p-2 px-10'>
            For legal advice, contact a lawyer immediately. Get help finding a
            lawyer at the California Courts Online Self-Help Center (
            <a href="https://www.courts.ca.gov/selfhelp">
              www.courts.ca.gov/selfhelp
            </a>
            ), at the California Legal Services website (
            <a href="https://www.lawhelpca.org">www.lawhelpca.org</a>), or by
            contacting your local county bar association.
          </div>
        </div>
        <div style={{ width: "50%", border: "1px solid black", padding: 2 }}>
          <div className='p-2 px-10'>
            Tiene <b>30 días de calendario</b> después de haber recibido la entrega
            legal de esta Citación y Petición para presentar una Respuesta
            (formulario FL-120) ante la corte y efectuar la entrega legal de una
            copia al demandante. Una carta o llamada telefónica o una audiencia de
            la corte no basta para protegerlo.
          </div>
          <div className='p-2 px-10'>
            Si no presenta su Respuesta a tiempo, la corte puede dar órdenes que
            afecten su matrimonio o pareja de hecho, sus bienes y la custodia de sus
            hijos. La corte también le puede ordenar que pague manutención, y
            honorarios y costos legales.
          </div>
          <div className='p-2 px-10'>
            Para asesoramiento legal, póngase en contacto de inmediato con un
            abogado. Puede obtener información para encontrar un abogado en el
            Centro de Ayuda de las Cortes de California (
            <a href="https://www.sucorte.ca.gov">www.sucorte.ca.gov</a>), en el
            sitio web de los Servicios Legales de California (
            <a href="https://www.lawhelpca.org">www.lawhelpca.org</a>) o poniéndose
            en contacto con el colegio de abogados de su condado.
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          fontSize: 14
        }}
      >
        <div style={{ width: "50%", border: "1px solid black", padding: 2 }} >
          <b className='p-2 px-10'>NOTICE—RESTRAINING ORDERS ARE ON PAGE 2:</b>
          <div className='p-2 px-10'>
            These restraining orders are effective against both spouses or domestic
            partners until the petition is dismissed, a judgment is entered, or the
            court makes further orders. They are enforceable anywhere in California
            by any law enforcement officer who has received or seen a copy of them.
          </div>
        </div>
        <div style={{ width: "50%", border: "1px solid black", padding: 2 }}>
          <b className='p-2 px-10'>AVISO—LAS ÓRDENES DE RESTRICCIÓN SE ENCUENTRAN EN LA PÁGINA 2:</b>
          <div className='p-2 px-10'>
            Las órdenes de restricción están en vigencia en cuanto a ambos cónyuges
            o miembros de la pareja de hecho hasta que se despida la petición, se
            emita un fallo o la corte dé otras órdenes. Cualquier agencia del orden
            público que haya recibido o visto una copia de estas órdenes puede
            hacerlas acatar en cualquier lugar de California.
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <div style={{ width: "50%", border: "1px solid black", padding: 2 }}>
          <b className='p-2 px-10'>FEE WAIVER:</b>
          <div className='p-2 px-10'>
            If you cannot pay the filing fee, ask the clerk for a fee waiver form.
            The court may order you to pay back all or part of the fees and costs
            that the court waived for you or the other party.
          </div>
        </div>
        <div style={{ width: "50%", border: "1px solid black", padding: 2 }}>
          <b className='p-2 px-10'>EXENCIÓN DE CUOTAS:</b>
          <div className='p-2 px-10'>
            Si no puede pagar la cuota de presentación, pida al secretario un
            formulario de exención de cuotas. La corte puede ordenar que usted
            pague, ya sea en parte o por completo, las cuotas y costos de la corte
            previamente exentos a petición de usted o de la otra parte.
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }} className='mt-6'>
        <div
          style={{
            border: "1px solid black",
            padding: 10,
            width: "35%",
            height:'170px'
          }}
        >
          [SEAL]
        </div>
        <div style={{ width: "75%" }}>
          <div style={{ marginBottom:'10px' }} className='ml-2'>
            1. The name and address of the court are (El nombre y dirección de la
            corte son):
          </div>
       <input type="text"  className='ml-4 w-[85%] bg-[white] border border-black' />
          <div className='py-2 ml-2'>
            2. The name, address, and telephone number of the petitioner’s attorney,
            or the petitioner without an attorney, are: (El nombre, dirección y
            número de teléfono del abogado del demandante, o del demandante si no
            tiene abogado, son):
          </div>
          <input type="text"  className='ml-4 w-[85%] bg-[white] border border-black'/>
        </div>
      </div>
      <div style={{ width: "30%", float: "left" }} className='py-2'>
        <p className='px-4'>Date (Fecha): <input type="text" className='bg-[white] border border-black w-[50%]' /></p>
      </div>
      <div style={{ width: "35%", float: "right" }}>
        <p>Clerk, by (Secretario, por) <input type="text" className='bg-[white] border border-black w-[%]' /> Deputy (Asistente)</p>
      </div>
      <hr style={{ width: "100%" , border :'1px solid black' }} />











      {/* dfngnfgekgmelkgmjdfnjsssssssssssssssssssssssssssssdddddddddddddddddddddddjjjjjjjjjjjjjjjjjjjjjj */}
      <div style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div style={{ listStyle: "none", fontSize: 10 }}>
          <li>Form Adopted for Mandatory Use</li>
          <li>Judicial Council of California</li>
          <li>FL-110 [Rev. January 1, 2015]</li>
        </div>
        <div style={{ textAlign: "center" }}>
          <b>
            SUMMONS
            <br /> (Family Law)
          </b>
        </div>
        <div style={{ listStyle: "none", fontSize: 10 }}>
          <li>
            Family Code, §§ 232, 233, 2024.7, 2040, 7700;
            <br />
            Code of Civil Procedure, §§ 412.20, 416.60–416.90
            <br />
            www.courts.ca.gov
          </li>
        </div>
      </div>
      {/* <div style={{ pageBreakBefore: "always" }} /> */}
      <div style={{ display: "flex", fontSize: '13px' }}>
        <div className='px-6'>
          <div>
            <b className='text-lg'>STANDARD FAMILY LAW RESTRAINING ORDERS</b>
          </div>
          <div>
            <b>
              Starting immediately, you and your spouse or domestic partner are
              restrained from:
            </b>
          </div>
          <ol>
            <li className='py-1 px-3'>
             1. removing the minor children of the parties from the state or applying
              for a new or replacement passport for those minor children without the
              prior written consent of the other party or an order of the court;
            </li>
            <li className='py-1 px-3'>
              {" "}
             2. cashing, borrowing against, canceling, transferring, disposing of, or
              changing the beneficiaries of any insurance or other coverage,
              including life, health, automobile, and disability, held for the
              benefit of the parties and their minor children;
            </li>
            <li className='py-1 px-3'>
              {" "}
             3. transferring, encumbering, hypothecating, concealing, or in any way
              disposing of any property, real or personal, whether community,
              quasi-community, or separate, without the written consent of the other
              party or an order of the court, except in the usual course of business
              or for the necessities of life; and
            </li>
            <li className='py-1 px-3'>
              {" "}
             4. creating a nonprobate transfer or modifying a nonprobate transfer in a
              manner that affects the disposition of property subject to the
              transfer, without the written consent of the other party or an order
              of the court. Before revocation of a nonprobate transfer can take
              effect or a right of survivorship to property can be eliminated,
              notice of the change must be filed and served on the other party.
            </li>
          </ol>
          <div className='text-[14px] py-2'>
            You must notify each other of any proposed extraordinary expenditures at
            least five business days prior to incurring these extraordinary
            expenditures and account to the court for all extraordinary expenditures
            made after these restraining orders are effective. However, you may use
            community property, quasi-community property, or your own separate
            property to pay an attorney to help you or to pay court costs.
          </div>
          <div style={{ marginTop: 20 }}>
            <b>NOTICE—ACCESS TO AFFORDABLE HEALTH INSURANCE:</b> Do you or someone
            in your household need affordable health insurance? If so, you should
            apply for Covered California. Covered California can help reduce the
            cost you pay towards high quality affordable health care. For more
            information, visit www.coveredca.com. Or call Covered California at
            1-800-300-1506.
          </div>
          <div style={{ marginTop: 20 }}>
            <b>WARNING—IMPORTANT INFORMATION </b>California law provides that, for
            purposes of division of property upon dissolution of a marriage or
            domestic partnership or upon legal separation, property acquired by the
            parties during marriage or domestic partnership in joint form is
            presumed to be community property. If either party to this action should
            die before the jointly held community property is divided, the language
            in the deed that characterizes how title is held (i.e., joint tenancy,
            tenants in common, or community property) will be controlling, and not
            the community property presumption. You should consult your attorney if
            you want the community property presumption to be written into the
            recorded title to the property.
          </div>
        </div>
        <div style={{ marginLeft: 10 }} className='px-6'>
          <div>
          
            <b className='text-lg'>ÓRDENES DE RESTRICCIÓN ESTÁNDAR DE DERECHO FAMILIAR</b>
            <div>
              <b>
                En forma inmediata, usted y su cónyuge o pareja de hecho tienen
                prohibido:
              </b>
            </div>
            <ol>
              <li className='py-1 px-3'>
                1. llevarse del estado de California a los hijos menores de las
                partes, o solicitar un pasaporte nuevo o de repuesto para los hijos
                menores, sin el consentimiento previo por escrito de la otra parte o
                sin una orden de la corte;
              </li>
              <li className='py-1 px-3'>
                2. cobrar, pedir prestado, cancelar, transferir, deshacerse o
                cambiar el nombre de los beneficiarios de cualquier seguro u otro
                tipo de cobertura, como de vida, salud, vehículo y discapacidad, que
                tenga como beneficiario(s) a las partes y su(s) hijo(s) menor(es);
              </li>
              <li className='py-1 px-3'>
                3. transferir, gravar, hipotecar, ocultar o deshacerse de cualquier
                manera de cualquier propiedad, inmueble o personal, ya sea
                comunitaria, cuasicomunitaria o separada, sin el consentimiento
                escrito de la otra parte o una orden de la corte, excepto en el
                curso habitual de actividades personales y comerciales o para
                satisfacer las necesidades de la vida; y
              </li>
              <li className='py-1 px-3'>
                4. crear o modificar una transferencia no testamentaria de manera
                que afecte la asignación de una propiedad sujeta a transferencia,
                sin el consentimiento por escrito de la otra parte o una orden de la
                corte. Antes de que se pueda eliminar la revocación de una
                transferencia no testamentaria, se debe presentar ante la corte un
                aviso del cambio y hacer una entrega legal de dicho aviso a la otra
                parte.
              </li>
            </ol>
            <div className='text-[14px] py-2'>
              Cada parte tiene que notificar a la otra sobre cualquier gasto
              extraordinario propuesto por lo menos cinco días hábiles antes de
              realizarlo, y rendir cuenta a la corte de todos los gastos
              extraordinarios realizados después de que estas órdenes de restricción
              hayan entrado en vigencia. No obstante, puede usar propiedad
              comunitaria, cuasicomunitaria o suya separada para pagar a un abogado
              que lo ayude o para pagar los costos de la corte.
            </div>
          </div>
          <div style={{ marginTop: 20 }}>
            <b>AVISO—ACCESO A SEGURO DE SALUD MÁS ECONÓMICO:</b>
            <div>
              ¿Necesita seguro de salud a un costo asequible, ya sea para usted o
              alguien en su hogar? Si es así, puede presentar una solicitud con
              Covered California. Covered California lo puede ayudar a reducir el
              costo que paga por seguro de salud asequible y de alta calidad. Para
              obtener más información, visite www.coveredca.com. O llame a Covered
              California al 1-800-300-0213.
            </div>
          </div>
          <div style={{ marginTop: 25 }}>
            <b>ADVERTENCIA—IMFORMACIÓN IMPORTANTE</b>
            <div>
              <b>
                De acuerdo a la ley de California, las propiedades adquiridas por
                las partes durante su matrimonio o pareja de hecho en forma conjunta
                se consideran propiedad comunitaria para fines de la división de
                bienes que ocurre cuando se produce una disolución o separación
                legal del matrimonio o pareja de hecho. Si cualquiera de las partes
                de este caso llega a fallecer antes de que se divida la propiedad
                comunitaria de tenencia conjunta, el destino de la misma quedará
                determinado por las cláusulas de la escritura correspondiente que
                describen su tenencia (por ej., tenencia conjunta, tenencia en común
                o propiedad comunitaria) y no por la presunción de propiedad
                comunitaria. Si quiere que la presunción comunitaria quede
                registrada en la escritura de la propiedad, debería consultar con un
                abogado
              </b>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ width: "100%" }} />
      <div
        className="footer"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div style={{ listStyle: "none", fontSize: 10 }}>
          <li>FL-110 [Rev. January 1, 2015] </li>
        </div>
        <div style={{ textAlign: "center" }}>
          <b>
            SUMMONS
            <br />
            (Family Law)
          </b>
        </div>
        <div style={{ listStyle: "none", fontSize: 10 }}>
          <li>Page 2 of 2</li>
        </div>
      </div>
      </div>
    </>


  )
}