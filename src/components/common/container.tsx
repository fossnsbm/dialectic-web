interface ContainerProps {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className={`
            relative
            max-w-[1500px]
            mx-auto
            xl:px-20
            md:px-10
            sm:px-10
            sm:h-screen
            h-full
        `}
    >
      {children}
    </div>
  )
}

export default Container
