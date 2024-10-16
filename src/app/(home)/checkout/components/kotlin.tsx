// # import android.os.Bundle
// # import androidx.activity.ComponentActivity
// # import androidx.activity.compose.setContent
// # import androidx.compose.foundation.Image
// # import androidx.compose.foundation.layout.*
// # import androidx.compose.foundation.shape.RoundedCornerShape
// # import androidx.compose.foundation.verticalScroll
// # import androidx.compose.material3.*
// # import androidx.compose.runtime.Composable
// # import androidx.compose.ui.Alignment
// # import androidx.compose.ui.Modifier
// # import androidx.compose.ui.layout.ContentScale
// # import androidx.compose.ui.res.painterResource
// # import androidx.compose.ui.tooling.preview.Preview
// # import androidx.compose.ui.unit.dp
// # import androidx.compose.ui.unit.sp
// # import androidx.compose.ui.graphics.Color
// # import androidx.compose.foundation.rememberScrollState
// # import androidx.compose.ui.text.font.FontWeight
// # import com.example.learncompose.R

// # class MainActivity : ComponentActivity() {
// #     override fun onCreate(savedInstanceState: Bundle?) {
// #         super.onCreate(savedInstanceState)
// #         setContent {
// #             JetpackComposeTutorialScreen()
// #         }
// #     }
// # }

// # @Composable
// # fun JetpackComposeTutorialScreen() {
// #     val scrollState = rememberScrollState()

// #     Column(
// #         modifier = Modifier
// #             .fillMaxSize()
// #             .padding(16.dp)
// #             .verticalScroll(scrollState),
// #         horizontalAlignment = Alignment.CenterHorizontally,
// #         verticalArrangement = Arrangement.Top
// #     ) {
// #         // Image of Jetpack Compose
// #         Image(
// #             painter = painterResource(id = R.drawable.jetpack_compose_image),
// #             contentDescription = null,
// #             contentScale = ContentScale.Crop,
// #             modifier = Modifier
// #                 .fillMaxWidth()
// #                 .height(200.dp)
// #                 .padding(bottom = 16.dp)
// #                 .clip(RoundedCornerShape(8.dp))
// #         )

// #         // Title of the tutorial
// #         Text(
// #             text = "Jetpack Compose Tutorial",
// #             style = MaterialTheme.typography.h4,
// #             color = Color.Black,
// #             modifier = Modifier.padding(bottom = 8.dp),
// #             fontWeight = FontWeight.Bold
// #         )

// #         // Description of the tutorial
// #         Text(
// #             text = """
// #                 Jetpack Compose is a modern toolkit for building native Android UI. Compose simplifies and accelerates UI development on Android with less code, powerful tools, and intuitive Kotlin APIs.

// #                 In this tutorial, you build a simple UI component with declarative functions. You call Compose functions to say what elements you want, and the Compose compiler does the rest.

// #                 Compose is built around Composable functions. These functions let you define your app's UI programmatically because they let you describe how it should look and provide data dependencies, rather than focusing on the process of the UI's construction, such as initializing an element and then attaching it to a parent.

// #                 To create a Composable function, you add the @Composable annotation to the function name.
// #             """.trimIndent(),
// #             style = MaterialTheme.typography.body1,
// #             fontSize = 16.sp,
// #             color = Color.DarkGray,
// #             modifier = Modifier.padding(bottom = 16.dp)
// #         )

// #         // "Next" Button (Optional, can be used for navigation)
// #         Button(
// #             onClick = { /* Handle Next Action */ },
// #             modifier = Modifier
// #                 .fillMaxWidth()
// #                 .padding(vertical = 16.dp)
// #         ) {
// #             Text("Next")
// #         }
// #     }
// # }

// # @Preview(showBackground = true)
// # @Composable
// # fun JetpackComposeTutorialScreenPreview() {
// #     JetpackComposeTutorialScreen()
// # }
