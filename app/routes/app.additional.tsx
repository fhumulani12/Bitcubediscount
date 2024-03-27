import React, { useState, useCallback } from "react";
import {
  Page,
  Layout,
  LegacyCard,
  ChoiceList,
  Form,
  FormLayout,
  TextField,
  DataTable,
  Button,
  Card,
} from "@shopify/polaris";

export default function AdditionalPage() {
  const [selected, setSelected] = useState<string[]>(['hidden']);
  const [choosen, setChoosen] = useState<string[]>(['hidden']);
  const [url, setUrl] = useState('');
  const [percentage, setPercentage] = useState('');

  const handleChange = useCallback((value: string[]) => setSelected(value), []);
  const handleUrlChange = useCallback((value: string) => setUrl(value), []);
  const handlePercentageChange = useCallback((value: string) => setPercentage(value), []);


  const rows = [
    ["Nike AirForce", "Active", "20%", "R1200", "H2301"],
    ["Redbat T-shirt", "Inactive", "30%", "R120", "T0239"],

  ];

  const headers = [
    "Product",
    "Status",
    "Discount",
    "Price",
    "Code",
  ];

  return (
    <Page>
      <Layout>
        <Layout.Section>
          <LegacyCard title="Generate discount code" sectioned>
            <p>View a summary of your online store’s performance.</p>
          </LegacyCard>
          <Layout.Section>
            <ChoiceList
              title="Select Discount Type"
              choices={[
                { label: 'Percentage Discount', value: 'percentage' },
                { label: 'Fixed Amount Discount', value: 'fixed' },
                { label: 'Free Shipping', value: 'free-shipping' },
              ]}
              selected={selected}
              onChange={handleChange}
            />
          </Layout.Section>
          <Layout.Section>
            <Form onSubmit={() => {}}>
              <FormLayout>
                <TextField
                  value={url}
                  onChange={handleUrlChange}
                  label="Product name"
                  placeholder="e.g. Nike Air Force 1 Fresh Gold"
                  type="text"
                  autoComplete="off"
                />
                <TextField
                  value={percentage}
                  onChange={handlePercentageChange}
                  label="Discount %"
                  placeholder="e.g. 20%"
                  type="text"
                  autoComplete="off"
                />
              </FormLayout>
            </Form>
          </Layout.Section>
          <Layout.Section>
            <ChoiceList
              title="Select Product Type"
              choices={[
                { label: 'Product (You can select the full product)', value: 'product' },
                { label: 'Variet (You can select Variet of products)', value: 'variet' },
              ]}
              selected={choosen}
              onChange={setChoosen}
            />
          </Layout.Section>
          <Layout.Section>
            <TextField


label="Generate Code"
placeholder="e.g. Bitcube123"
type="text"
autoComplete="off"
/>
            </Layout.Section>
          <Layout.Section>
          <Card>
            <DataTable
              columnContentTypes={["text", "text", "numeric", "text", "text"]}
              headings={headers}
              rows={rows}
            />
          </Card>
          </Layout.Section>
          <Layout.Section>

<Button>Add Product</Button>
          </Layout.Section>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
