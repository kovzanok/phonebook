import { Footer, Flex } from "@mantine/core";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function MyFooter() {
  return (
    <>
      <Footer height={60} p='md'>
        <Flex justify='center' align='center' gap='lg'>
          <a target='_blank' href='https://github.com/kovzanok'>
            <FaGithub size='30px' color='initial' />
          </a>
          <a
            target='_blank'
            href='https://www.linkedin.com/in/alexander-kovzan/'
          >
            <FaLinkedin size='30px' color='initial' />
          </a>
        </Flex>
      </Footer>
    </>
  );
}
