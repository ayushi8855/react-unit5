export const isLoggedIn = "isLoggedIn"

export const toggleauth = (data)=>
{
  
    return  {
      type: isLoggedIn,
      payload :data
      
  }
}