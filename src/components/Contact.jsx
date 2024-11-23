import { useState, useRef} from 'react'
import { motion } from 'framer-motion'
import { EarthCanvas } from './canvas'
import { slideIn } from '../utils/motion'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
const Contact = () => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  return (
    <div className='xl:mt-12 xl'
    >
      
    </div>
  )
}

export default Contact