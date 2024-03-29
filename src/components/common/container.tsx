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
            px-4
            xl:px-20
            md:px-10
            sm:px-10
        `}
    >
      {children}
    </div>
  )
}

export default Container
