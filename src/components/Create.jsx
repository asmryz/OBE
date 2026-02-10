import { IconArrowLeft } from '@tabler/icons-react';
import {
  Anchor,
  Box,
  Button,
  Center,
  Container,
  Group,
  Paper,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import classes from './Create.module.css';

export function Create() {
  return (
    <Container size={460} my={30}>
      <Title className={classes.title} ta="center">
        Create an account
      </Title>
      <Text c="dimmed" fz="sm" ta="center">
        Enter your @szabist.pk email to create account
      </Text>

      <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
        <TextInput
          label="Your email"
          placeholder="me@mantine.dev"
          required
          rightSection={<Text className={classes.emailSuffix}>@szabist.pk</Text>}
          rightSectionWidth={100}
        />
        <Group justify="space-between" mt="lg" className={classes.controls}>
          <Anchor c="dimmed" size="sm" className={classes.control} href='/'>
            <Center inline>
              <IconArrowLeft size={12} stroke={1.5} />
              <Box ml={5} >Back to the login page</Box>
            </Center>
          </Anchor>
          <Button className={classes.control}>Create</Button>
        </Group>
      </Paper>
    </Container>
  );
}