import {
    Anchor,
    Button,
    Checkbox,
    Container,
    Group,
    Paper,
    PasswordInput,
    Text,
    TextInput,
    Title,
} from '@mantine/core';
import classes from './Login.module.css';
import { notifications } from '@mantine/notifications';

export default function Login() {
    return (
        <Container size={420} my={40}>
            {/* <Title ta="center" className={classes.title}>
        Welcome back!
      </Title> */}

            <Text className={classes.subtitle}>
                Do not have an account yet? <Anchor>Create account</Anchor>
            </Text>

            <Paper withBorder shadow="sm" p={22} mt={30} radius="md">
                <TextInput label="Email" placeholder="you@mantine.dev" required radius="md" autoComplete='false' />
                <PasswordInput label="Password" placeholder="Your password" required mt="md" radius="md" />
                <Group justify="space-between" mt="lg">
                    <Checkbox label="Remember me" />
                    <Anchor component="button" size="sm">
                        Forgot password?
                    </Anchor>
                </Group>
                <Button fullWidth mt="xl" radius="md" 
                onClick={() => notifications.show({
                    title: 'Default notification',
                    message: 'Do not forget to star Mantine on GitHub! 🌟',
                    position: 'bottom-center',
                })}>
                    Sign in
                </Button>
            </Paper>
        </Container>
    );
}