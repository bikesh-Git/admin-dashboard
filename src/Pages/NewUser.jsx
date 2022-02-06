import Styled from 'styled-components'

const Container = Styled.div`
    flex: 4;
`
const Top = Styled.div`
margin: 20px;
`

const Bottom = Styled.div`
  display: flex;
  flex-wrap: wrap;
justify-content: space-around;
`
const TopTitle = Styled.h1`
`

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
const ActiveSector= Styled.select`
  width: 300px;
  padding: 10px;
  margin: 10px 0; 
`

const ActiveOption = Styled.option``


const NewUser = () => {
  return <Container>
    <Top>
    <TopTitle>    NEW User</TopTitle>
  
    </Top>

    <Bottom>


      <Field>
        <LableField>Username</LableField>
        <InputField placeholder="Username" />
      </Field>
      <Field>
        <LableField>Username</LableField>
        <InputField placeholder="Username" />
      </Field>
      <Field>
        <LableField>Username</LableField>
        <InputField placeholder="Username" />
      </Field>
      <Field>
        <LableField>Username</LableField>
        <InputField placeholder="Username" />
      </Field>
      <Field>
        <LableField>Username</LableField>
        <InputField placeholder="Username" />
      </Field>
      <Field>
        <LableField>Username</LableField>
        <InputField placeholder="Username" />
      </Field>
      <Field>
        <LableField>Username</LableField>
        <InputField placeholder="Username" />
      </Field>
      <Field>
        <LableField>Username</LableField>
        <InputField placeholder="Username" />
      </Field>

      <Field>
      <LableField>Gender</LableField>
        <GenderSection> 
        <LableField>Male</LableField>
        <InputFieldGender type="radio" value="Male" />
        <LableField>Female</LableField>
        <InputFieldGender type="radio" value="Female" />
        <LableField>Other</LableField>
        <InputFieldGender type="radio" value="Other" />
        </GenderSection>     
      </Field>

      <Field>
      <LableField>Active</LableField>
      <ActiveSector>
        <ActiveOption>A</ActiveOption>
        <ActiveOption>b</ActiveOption>
        <ActiveOption>c</ActiveOption>
        <ActiveOption>d</ActiveOption>
      </ActiveSector>
      </Field>
      



    </Bottom>




  </Container>;
};

export default NewUser;
