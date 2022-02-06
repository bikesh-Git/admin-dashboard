import Styled from 'styled-components'
import {useState} from 'react'
import {adminRequest} from '../requestMethod'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../firebase'
import {addProduct} from '../redux/apiCalls'
import { useDispatch } from 'react-redux';


const Container = Styled.div`
    flex: 4;
`
const Top = Styled.div`
margin: 20px;
`

const Bottom = Styled.div`
  /* display: flex;
  flex-wrap: wrap;
justify-content: space-around; */
`
const TopTitle = Styled.h1`
`
const FormField = Styled.form``

const Field = Styled.div`
margin:10px;
display: flex;
flex-direction: column;
`
const LableField = Styled.label`
  font-weight: 300;
`
const InputField = Styled.input`
  width: 300px;
  padding: 10px;
  margin: 10px 0;
`
const GenderSection =Styled.div`
 width: 300px;
  padding: 10px;
  margin: 10px 0; 
`
const InputFieldGender = Styled.input`
/* border: 1px solid red ; */
`
const SelectField= Styled.select`
  width: 300px;
  padding: 10px;
  margin: 10px 0; 
`

const SelectOption = Styled.option``

const CreateButton =Styled.button`
padding:10px 20px;
color: white;
background-color: blue;
`

const NewProduct = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState({})
  const [file, setFile] = useState([])
  const [cat, setCat] = useState([])

  const handleChange = (e) => {
    setInput({ 
      ...input,
      // cat,
      [e.target.name] : e.target.value
     })
  }
  const handleCat=(e)=>{
    setCat(e.target.value.split(","));
  }

  const handleClick = async(e)=>{
    e.preventDefault();
    console.log(file)
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app)
    const storageRef = ref(storage,fileName)
    // try{
    //     const res = await adminRequest.post("/",{...input,cat,})
    // }
    // catch(e) {
    //   alert(e)
    // }
    const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on('state_changed', 
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
        default:
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
     const product = {...input,img: downloadURL,category:cat};
     addProduct(dispatch , product)
    });
  }
);

  }



console.log("sadasd",input)

  return <Container>
    <Top>
    <TopTitle>    New Product</TopTitle>
  
    </Top>

    <Bottom>

  <FormField>
      <Field>
        <LableField>IMAGE</LableField>
        <InputField type="file" onChange={(e)=>setFile(e.target.files[0])}/>
      </Field>
      <Field>
        <LableField>TITLE</LableField>
        <InputField placeholder="title" name="title" onChange={handleChange}/>
      </Field>
      <Field>
        <LableField>DESCRIPTION</LableField>
        <InputField placeholder="description" name="desc" onChange={handleChange} />
      </Field>
      <Field>
        <LableField>STOCK</LableField>
        <SelectField name="inStock" onChange={handleChange}>
        <SelectOption value={true}>YES</SelectOption>
        <SelectOption value={false} >NO</SelectOption>
        </SelectField>
      </Field>

      <Field>
      <LableField>CATEGORY</LableField>
      <InputField placeholder="description" name="category" onChange={handleCat} />
      </Field>
      <Field>
        <LableField>PRICE</LableField>
        <InputField type="number" placeholder="Price" name="price" onChange={handleChange} />
      </Field>
      <CreateButton onClick={handleClick}>Create</CreateButton>
      </FormField>

      </Bottom>
     

  </Container>;
};

export default NewProduct;
