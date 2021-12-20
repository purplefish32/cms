import Head from 'next/head'
import Layout from '../src/components/Layout'
import StaffTable from '../src/components/StaffTable'

export default function Staff() {
  return (
    <Layout>
      <h1 className={"text-4xl"}>Staff</h1>
      <StaffTable></StaffTable>
    </Layout>
  )
}

