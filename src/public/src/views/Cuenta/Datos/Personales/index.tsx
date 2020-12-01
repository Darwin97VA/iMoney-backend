import React, { useState } from 'react'

import Input from '../../../../components/Input/index'
import Button from '../../../../components/Button'

import classes from './style.module.css'


const Option = ({selected, children, onClick, props} : any) => 
<button style={{
    padding: '.15em .25em', 
    margin: '.5em .5em 0 0',
    background: selected ? '#BBBBBB' : 'white',
    border: '#BBBBBB',
}} {...props} onClick={e=>{
    e.preventDefault()
    onClick(e)
}}>{children}</button>


const Personales = ({ addSubmit }: { addSubmit: Function }) => {
    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [nacionalidad, setNacionalidad] = useState('')
    const [ocupacion, setOcupacion] = useState('')
    const [isPep, setIsPep] = useState(false)
    const [cargo, setCargo] = useState('')
    const [empresa, setEmpresa] = useState('')

    return (
        <form className={classes.form}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <h1 style={{textAlign: 'center', marginLeft: '8px'}}>1) Registra tus Datos Personales</h1>
            </div>
            <fieldset className={classes.fieldset}>
                <Input label="Nombres" value={nombres} setValue={setNombres} />
                <Input label="Apellidos" value={apellidos} setValue={setApellidos} />

                <Input label="Nacionalidad" value={nacionalidad} setValue={setNacionalidad} />
                <Input label="Ocupación" value={ocupacion} setValue={setOcupacion} />

                <div className="field-container" style={{
                    display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                    <div className="fied-label">(PEP) Persona Expuesta Políticamente</div>
                    <div>
                        <Option onClick={()=>setIsPep(true)} selected={isPep}>Sí</Option>
                        <Option onClick={()=>setIsPep(false)} selected={!isPep}>No</Option>
                    </div>
                </div>

                <Input label="Cargo" value={cargo} setValue={setCargo} disabled={!isPep} />
                <Input label="Empresas vinculadas" value={empresa} setValue={setEmpresa} disabled={!isPep} />
            </fieldset>

            <Button style={{margin: 'auto', width: '300px'}}
                onClick={(e)=>{
                    e.preventDefault()
                    addSubmit()
                }}> Siguiente </Button>

        </form>
    )
}

export default Personales