import { Header, Content, Panel, PanelGroup, Form, Button } from 'rsuite';
import Layout from '../../../components/Layout';

const Page = () => {
    return (
        <Layout>
            <PanelGroup>
                <Panel>
                    <Header>
                        <h1>Tags</h1>
                    </Header>
                </Panel>
                <Panel>
                    <Content>
                        <h4>Add New Tag</h4>
                        <Form>
                            <Form.Group>
                                <Form.ControlLabel>Name</Form.ControlLabel>
                                <Form.Control
                                    name="name"
                                    type="text"
                                    placeholder="Name"
                                />
                                <Form.HelpText>
                                    The name is how it appears on your site.
                                </Form.HelpText>

                            </Form.Group>
                            <Form.Group>
                                <Form.ControlLabel>Slug</Form.ControlLabel>
                                <Form.Control
                                    checkAsync
                                    name="slug"
                                    type="text"
                                    placeholder="Slug"
                                />
                                <Form.HelpText>
                                    The “slug” is the URL-friendly version of the name. It is usually all lowercase and contains only letters, numbers, and hyphens.
                                </Form.HelpText>
                            </Form.Group>
                            <Form.Group>
                                <Form.ControlLabel>Parent</Form.ControlLabel>
                                <Form.Control
                                    name="parent"
                                    type="text"
                                />
                                <Form.HelpText>
                                    Categories, unlike tags, can have a hierarchy. You might have a Jazz category, and under that have children categories for Bebop and Big Band. Totally optional.                                </Form.HelpText>
                            </Form.Group>
                            <Form.Group>
                                <Form.ControlLabel>Description</Form.ControlLabel>
                                <Form.Control
                                    name="description"
                                    type="text"
                                />
                                <Form.HelpText>
                                    The description is not prominent by default; however, some themes may show it.
                                </Form.HelpText>
                            </Form.Group>
                            <Button type="submit" appearance="primary">Add New Taxonomy Term</Button>
                        </Form>
                    </Content>
                </Panel>
            </PanelGroup>
        </Layout>
    )
}

export default Page;