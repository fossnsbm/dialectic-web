import React from 'react'
import Containerf from 'components/common/containerf'
import { Button } from 'components/common/buttons/'
import { Input } from '../common/ui/input'
import { Container } from '../common'

const NewsLetter = () => {
  return (
    <div className="" id="bge">
      <Container>
        <div className="py-12 ">
          <div className="flex w-full md:flex-row flex-col  justify-center my-20">
            <div className="flex flex-1  flex-col md:items-start  items-center  gap-2 py-2">
              <div className=" md:text-5xl sm:text-4xl text-2xl font-semibold text-gray-0">
                Sign up for our newsletter!{''}
              </div>
              <div className="text-gray-0 text-sm ">
                Get notified about updates and be the first to get early access
                to new episodes.
              </div>
            </div>

            <div className="flex flex-1 flex-col  md:flex-row items-center justify-center  gap-2">
              <input
                type="text"
                placeholder="Enter Email"
                className="flex border-0 rounded-lg h-12 w-full  focus:shadow-lg focus:outline-blue-400 px-4"
              />
              <Button variant={'black'} className="flex">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default NewsLetter
