import React, {useState} from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function App() {
  
  const [valorTela,setValorTela]=useState('')
  const [resultado,setResultado]=useState(0)
  const [acumulador,setAcumulador]=useState(0)
  const [operado,setOperado]=useState(false)
  
  const Tela=(valor,res)=>{
    return(
      <Container sx={{ width: '19rem' }}>
        <Box justifyContent="center" textAlign="center"  sx={{
          width: '100%',
          height: 'auto',
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}>
            <Typography textAlign="center" variant="h6" color="#fff" gutterBottom component="div">
              {valor}
            </Typography>
            <Typography textAlign="center" variant="h2" color="#fff" gutterBottom component="div">
            {res}
            </Typography>
        </Box>
      </Container>    
      
    )

  }

  const Btn=(label,onClick)=>{
    return(
      <Button variant="outlined" size="large" onClick={onClick}>{label}</Button>
    )

  }
  
  const addDigitoTela=(d)=>{
    if((d=='+' || d=='-'|| d=='*'|| d=='/' ) && operado){
      console.log("+-/*")
      setOperado(false)
      setValorTela(resultado+d)
      return
    }
    if(operado){
      setValorTela(d)
      setOperado(false)
      return
    }
    const valorDigitadoTela=valorTela+d
    setValorTela(valorDigitadoTela)
  }

  const limparMemoria=()=>{
    setOperado(false)
    setValorTela('')
    setResultado(0)
    setAcumulador(0)
    return
  }

  const Operacao=(oper)=>{
    if(oper=='bs'){
      let vtela=valorTela
      vtela=vtela.substring(0,(vtela.length-1))
      setValorTela(vtela)
      setOperado(false)
      return
    }
    try{
      const r=eval(valorTela)
      setAcumulador(r)
      setResultado(r)
      setOperado(true)
    }catch{
      setResultado('ERRO')
    }

  }

  return (
    <>
    <CssBaseline />
      <Container maxWidth="sm" sx={{ border: 1 }}>
        <Box justifyContent="center" sx={{
          width: 'auto',
          height: 'auto',
          backgroundColor: 'primary',
          
        }}>
          <Typography textAlign="center" variant="h4" component="div" gutterBottom>
          Calculadora<br/> Simples
          </Typography>
        </Box>  
        {Tela(valorTela,resultado)}
        <Box justifyContent="center" textAlign="center" sx={{
          width: 'auto',
          height: 'auto',
          backgroundColor: 'primary', 
        }}>
          {Btn('AC',limparMemoria)}
          {Btn('(',()=>addDigitoTela('('))}
          {Btn(')',()=>addDigitoTela(')'))}
          {Btn('/',()=>addDigitoTela('/'))}<br/>
          {Btn('7',()=>addDigitoTela('7'))}
          {Btn('8',()=>addDigitoTela('8'))}
          {Btn('9',()=>addDigitoTela('9'))}
          {Btn('*',()=>addDigitoTela('*'))}<br/>
          {Btn('4',()=>addDigitoTela('4'))}
          {Btn('5',()=>addDigitoTela('5'))}
          {Btn('6',()=>addDigitoTela('6'))}
          {Btn('-',()=>addDigitoTela('-'))}<br/>        
          {Btn('1',()=>addDigitoTela('1'))}
          {Btn('2',()=>addDigitoTela('2'))}
          {Btn('3',()=>addDigitoTela('3'))}
          {Btn('+',()=>addDigitoTela('+'))}<br/>
          {Btn('0',()=>addDigitoTela('0'))}
          {Btn('.',()=>addDigitoTela('.'))}
          {Btn('<-',()=>Operacao('bs'))}
          {Btn('=',()=>Operacao('='))}
          
          

        </Box>
      
      </Container>
    </>
    
  );
}

