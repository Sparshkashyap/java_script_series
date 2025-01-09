import streamlit as st 


# st.title("Java script sai webpage banao")
# st.write("this is a possible only for hardworking")


st.title("Importance of Time")
st.write("""time is a money . It will be spend bhot soch samz kar then it will be kick you 
so my advised is focus only present and do hardworking . and as a Human being try to live as 
a River becase  River never Reverse  """

)

name=st.text_input("Enter your name")
age=st.slider("age",1,100)

if  st.button("button"):
    st.write(f" Thank you {name} apka din mangalmay🎊✅")
    



