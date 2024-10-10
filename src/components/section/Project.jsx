// import React from 'react'
// import ProjectCard from "../cards/ProjectCard"
// import {projects} from "../../data/constants"
// import styled from 'styled-components';



// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-contnet: center;
//   margin-top: 50px;
//   position: rlative;
//   z-index: 1;
//   align-items: center;
// `;

// const Wrapper = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-direction: column;
//   width: 100%;
//   max-width: 1100px;
//   gap: 12px;
//   @media (max-width: 960px) {
//     flex-direction: column;
//   }
// `;
// const Title = styled.div`
//   font-size: 52px;
//   text-align: center;
//   font-weight: 600;
//   margin-top: 20px;
//   color: ${({ theme }) => theme.text_primary};
//   @media (max-width: 768px) {
//     margin-top: 12px;
//     font-size: 32px;
//   }
// `;
// const Desc = styled.div`
//   font-size: 18px;
//   text-align: center;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_secondary};
//   @media (max-width: 768px) {
//     font-size: 16px;
//   }
// `;
// const ToggleButtonGroup = styled.div`
//     display: flex;
//   border: 1.5px solid ${({ theme }) => theme.primary};
//   color: ${({ theme }) => theme.primary};
//   font-size: 16px;
//   border-radius: 12px;
//     font-weight 500;
//     margin: 22px 0;
//     @media (max-width: 768px){
//         font-size: 12px;
//     }
// `;

// const ToogleButton = styled.div`
//   padding: 8px 18px;
//   border-radius: 6px;
//   cursor: pointer;
//   &:hover {
//     background: ${({ theme }) => theme.primary + 20};
//   }
//   @media (max-width: 768px) {
//     padding: 6px 8px;
//     border-radius: 4px;
//   }
//   ${({ active, theme }) =>
//     active &&
//     `
//   background:  ${theme.primary + 20};
//   `}

// `;
// const Divider = styled.div` 
//     width: 1.5px;
//   background: ${({ theme }) => theme.primary};
// `;
// const CardContainer = styled.div``;
// const Project = () => {
//   return (
//     <Container id="Experience">
//       <Wrapper>
        
//         <Title>Experience</Title>
//         <Desc
//           style={{
//             marginBottom: "40px",
//           }}
//         >
//           My work experience as a software engineer and working on different
//           companies and projects.
//         </Desc>
//         <ToggleButtonGroup>
//             <ToogleButton active={toggle === "all"} onClick={() => setToggle("all")}>
//                 All
//             </ToogleButton>
//             <Divider />
//         </ToggleButtonGroup>

//         <ToggleButtonGroup>
//             <ToogleButton active={toggle === "web app"} onClick={() => setToggle("web app")}>
//                 Web Apps
//             </ToogleButton>
//             <Divider />
//         </ToggleButtonGroup>

//         <ToggleButtonGroup>
//             <ToogleButton active={toggle === "Android app"} onClick={() => setToggle("Android app")}>
//                 Android Apps
//             </ToogleButton>
//             <Divider />
//         </ToggleButtonGroup>

//         {/* Card COntianer */}
//         <CardContainer>
//         {toggle === "all" &&
//             projects.map((project) => <ProjectCard project={project} />)}
//           {projects
//             .filter((item) => item.category === toggle)
//             .map((project) => (
//               <ProjectCard project={project} />
//             ))}
//         </CardContainer>
//       </Wrapper>
//     </Container>
//   )
// }

// export default Project
