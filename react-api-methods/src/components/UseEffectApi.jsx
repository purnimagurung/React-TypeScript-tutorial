import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getUsers = async () => {
  const res = await axios.get("https://api.github.com/users");
  console.log(res);
  return res.data;
};

const UseEffectApi = () => {
  const { data: users, error, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn : getUsers,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching users: {error.message}</p>;

 
  



  /* METHOD 1 */

    // const getUsers = async () =>{
    //     const response = await fetch('https://api.github.com/users');
    //     setUsers(await response.json());
    // }
    // useEffect(()=> {
    //     getUsers();

    // }, []);

    
     /* METHOD 2 */

    // useEffect(() => {
    //   const getUsers = async() =>
    //   {
    //     const response = await fetch('https://api.github.com/users');
    //     setUsers(await response.json());
    //   }
    //     getUsers();
    // }, [])

    /* Method 3  */

    // useEffect (()=> {
    //   const getUsers = async () => {
    //     try {
    //       const response = await axios.get("https://api.github.com/users");
    //       return setUsers(response.data)
    //     } catch (error)
    //     {
    //       console.error("Error fetching users:", error);
    //     }
    //   }
    //     getUsers();
    // }, [])

        /* Method 4  */

  

  return (
    <>
      <div classNameName="p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center" >

        {
          users.map((user ) => (
            <div key = {user.id} classNameName="mt-8">
              <h4 classNameName="font-bold text-xl">{user.login}</h4>
              <p classNameName="mt-2 text-gray-600">
                Create Exercises for any subject with the topics you and your students care about.
              </p>
              <div classNameName="mt-5">
                <button type="button" classNameName="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">
                  Start Creating
                </button>
              </div>
            </div>
        
         
          ) )
        }

      </div>
    </>
  );
};

export default UseEffectApi;
