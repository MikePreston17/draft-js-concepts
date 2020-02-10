import pallete from "../../pallete.json";
export const SubmitButton = props => {
  return (
    <span>
      <button type="submit" onClick={props.onClick}>
        {props.children}
      </button>
      <style jsx>{`
        button{
            border: "2px solid" + ${pallete.primary.teal};
            color:${pallete.primary.white};
            background-color:${pallete.primary.teal};
            display:inline-block;
            padding:0.3em 1.2em;
            margin:0 0.3em 0.3em 0;
            border-radius:2em;
            box-sizing: border-box;
            text-decoration:none;
            font-family:'Roboto',sans-serif;
            font-weight:400;
            text-align:center;
            transition: all 0.2s;
          }          
          button:hover{
            background-color:${pallete.primary.teal};
            border-color: ${pallete.primary.blue}
          }
          @media all and (max-width:30em){
           button{
            display:block;
            margin:0.2em auto;
           }
          } 
      `}</style>
    </span>
  );
};

// {
//       /* <style jsx>{`
//             button{
//                 border: "2px solid" + ${pallete.primary.teal};
//                 color:${pallete.primary.blue};
//                 background-color:${pallete.primary.white};
//                 display:inline-block;
//                 padding:0.3em 1.2em;
//                 margin:0 0.3em 0.3em 0;
//                 border-radius:2em;
//                 box-sizing: border-box;
//                 text-decoration:none;
//                 font-family:'Roboto',sans-serif;
//                 font-weight:400;
//                 text-align:center;
//                 transition: all 0.2s;
//               }
//               button:hover{
//                 background-color:${pallete.primary.blue};
//                 border-color: ${pallete.primary.blue}
//               }
//               @media all and (max-width:30em){
//                button{
//                 display:block;
//                 margin:0.2em auto;
//                }
//               }
//           `}</style> */
//     }
